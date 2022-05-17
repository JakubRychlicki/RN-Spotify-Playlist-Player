import { Audio } from "expo-av";
import * as actionsTypes from "./actionsTypes";

const playlistID = "2rtKqY0ookSbZ4wgEHuL4i";

export const fetchPlaylist = (token) => {
  return async (dispatch) => {
    dispatch({ type: actionsTypes.FETCH_PLAYLIST_START });
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistID}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    ).catch((err) => {
      dispatch({ type: actionsTypes.FETCH_PLAYLIST_FAIL, error: err });
    });

    const resData = await response.json();

    const arrayOfTracks = [];
    for (const { track } of resData.tracks.items) {
      const { id, name, artists, preview_url } = track;
      const fullDuration = await getDurationOfTrack(preview_url);
      const artistsNames = artists.map((artist) => artist.name).join(", ");
      arrayOfTracks.push({
        id: id,
        name: name,
        artists: artistsNames,
        url: preview_url,
        fullDuration: fullDuration,
      });
    }

    dispatch({
      type: actionsTypes.FETCH_PLAYLIST_SUCCESS,
      name: resData.name,
      tracks: arrayOfTracks,
    });
  };
};

const getDurationOfTrack = async (url) => {
  let fullDuration = 0;
  const { sound } = await Audio.Sound.createAsync({ uri: url });
  await sound.getStatusAsync().then((result) => {
    fullDuration = result.durationMillis;
  });

  return fullDuration;
};

export const setCurrentTrack = (track) => {
  return {
    type: actionsTypes.SET_CURRENT_TRACK,
    track,
  };
};

export const setRandomTrack = () => {
  return {
    type: actionsTypes.SET_RANDOM_TRACK,
  };
};

export const goToNextTrack = () => {
  return {
    type: actionsTypes.NEXT_TRACK,
  };
};

export const goToPrevTrack = () => {
  return {
    type: actionsTypes.PREV_TRACK,
  };
};
