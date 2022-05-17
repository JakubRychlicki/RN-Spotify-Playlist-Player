import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { Audio } from "expo-av";

// DISPATCH ACTIONS
import {
  goToNextTrack,
  goToPrevTrack,
  setRandomTrack,
} from "../store/actions/playlist";

// COMPONENTS
import Loading from "../components/UI/Loading";
import Header from "../components/Player/Header";
import PlaylistDetail from "../components/Player/PlaylistDetail";
import TrackList from "../components/Player/TrackList";
import BottomPlayer from "../components/Player/BottomPlayer";
import PlayerScreen from "./PlayerScreen";

export default function PlaylistScreen() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.playlist.name);
  const tracks = useSelector((state) => state.playlist.tracks);
  const currTrack = useSelector((state) => state.playlist.currentTrack);

  const [isPlayerShown, setIsPlayerShown] = useState(false);

  const playbackInstance = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isPlayingRandom, setIsPlayingRandom] = useState(false);
  const [postitionDuration, setPostitionDuration] = useState(0);

  useEffect(() => {
    if (currTrack) {
      getNewTrack();
    }
    return () => {
      if (playbackInstance.current != null)
        playbackInstance.current.unloadAsync().catch((err) => {
          console.log("Unload warning: " + err);
        });
    };
  }, [currTrack]);

  // Get a new track and play
  const getNewTrack = async () => {
    // if (playbackInstance.current != null) {
    //   await playbackInstance.current.unloadAsync();
    // }

    try {
      const source = {
        uri: currTrack.url,
      };

      const initialStatus = {
        shouldPlay: true,
        progressUpdateIntervalMillis: 1000,
      };
      playbackInstance.current = new Audio.Sound();
      playbackInstance.current.setOnPlaybackStatusUpdate(
        onPlaybackStatusUpdate
      );
      await playbackInstance.current.loadAsync(source, initialStatus, false);
    } catch (error) {
      console.log(error);
    }
    setIsPlaying(true);
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status.didJustFinish && !status.isLooping) {
      nextTrack();
    }
    setPostitionDuration(status.positionMillis);
    // console.log(status);
  };

  const setPositionTrack = async (timeInMillis) => {
    await playbackInstance.current.setPositionAsync(timeInMillis);
  };

  // Random track playing after the track completes doesn't work
  // const handlePlayNextOrRandomTrack = () => {
  //   if (isPlayingRandom) {
  //     randomTrack();
  //   } else {
  //     nextTrack();
  //   }
  // };

  // Select random track
  const randomTrack = () => {
    dispatch(setRandomTrack());
  };

  // Handling play and pause
  const handlePlayPause = async () => {
    isPlaying
      ? await playbackInstance.current.pauseAsync()
      : await playbackInstance.current.playAsync();

    setIsPlaying((isPlaying) => !isPlaying);
  };

  // If random play in off, go to the next track
  const nextTrack = () => {
    isPlayingRandom ? randomTrack() : dispatch(goToNextTrack());
  };

  // Go to the previous track
  const prevTrack = () => {
    dispatch(goToPrevTrack());
  };

  // Loop track
  const handleLoop = async () => {
    isLooping
      ? await playbackInstance.current.setIsLoopingAsync(false)
      : await playbackInstance.current.setIsLoopingAsync(true);

    setIsLooping((isLooping) => !isLooping);
  };

  // Handling for random play track
  const handleRandom = () => {
    setIsPlayingRandom((prevIsPlayingRandom) => !prevIsPlayingRandom);
  };

  if (tracks.length === 0) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header
        onTouch={
          currTrack ? () => setIsPlayerShown((prevState) => !prevState) : null
        }
      />
      {!isPlayerShown ? (
        <>
          <PlaylistDetail name={name} />
          <TrackList
            tracks={tracks}
            isPlayerOn={currTrack != null}
            postitionDuration={postitionDuration}
          />
          <BottomPlayer
            track={currTrack}
            toggle={handlePlayPause}
            next={nextTrack}
            prev={prevTrack}
            isPlaying={isPlaying}
          />
        </>
      ) : (
        <PlayerScreen
          track={currTrack}
          isPlaying={isPlaying}
          isLooping={isLooping}
          isPlayingRandom={isPlayingRandom}
          toggle={handlePlayPause}
          next={nextTrack}
          prev={prevTrack}
          loop={handleLoop}
          random={handleRandom}
          setPositionTrack={setPositionTrack}
          postitionDuration={postitionDuration}
        />
      )}
    </View>
  );
}
