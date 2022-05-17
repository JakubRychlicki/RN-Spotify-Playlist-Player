import { View, StyleSheet, Image } from "react-native";

// COMPONENTS
import { TextSFProR } from "../components/UI/TextFont";
import IconButton from "../components/UI/IconButton";
import PlayBar from "../components/Player/PlayBar";

export default function PlayerScreen({
  track,
  isPlaying,
  isLooping,
  isPlayingRandom,
  toggle,
  next,
  prev,
  loop,
  random,
  setPositionTrack,
  postitionDuration,
}) {
  const { name, artists, fullDuration } = track;

  return (
    <View style={styles.container}>
      <Image style={styles.trackImg} />
      <View>
        <TextSFProR style={styles.trackName}>{name}</TextSFProR>
        <TextSFProR style={styles.trackArtists}>{artists}</TextSFProR>
      </View>
      <PlayBar
        setPositionTrack={setPositionTrack}
        postitionDuration={postitionDuration}
        fullDuration={fullDuration}
      />
      <View style={styles.playerBox}>
        <IconButton
          name="LOOP"
          size={20}
          color={isLooping ? "#C6C6CA" : "#3C7AC7"}
          onTouch={loop}
        />
        <IconButton name="BACKWARD" size={20} color="#3C7AC7" onTouch={prev} />
        {isPlaying ? (
          <IconButton name="PAUSE" size={40} color="#3C7AC7" onTouch={toggle} />
        ) : (
          <IconButton name="PLAY" size={40} color="#3C7AC7" onTouch={toggle} />
        )}
        <IconButton name="FORWARD" size={20} color="#3C7AC7" onTouch={next} />
        <IconButton
          name="RANDOM"
          size={20}
          color={isPlayingRandom ? "#C6C6CA" : "#3C7AC7"}
          onTouch={random}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  trackImg: {
    alignSelf: "center",
    width: 300,
    height: 300,
    backgroundColor: "#C6C6CA",
    borderRadius: 150,
  },
  trackName: {
    fontSize: 22,
    textAlign: "center",
    color: "#1E2022",
    marginBottom: 13,
  },
  trackArtists: {
    fontSize: 16,
    textAlign: "center",
    color: "#77838F",
  },
  playerBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
  },
});
