import * as actionsTypes from "../actions/actionsTypes";

const initialState = {
  name: "",
  tracks: [],
  currentTrack: null,
  isLoading: false,
  error: null,
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_PLAYLIST_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionsTypes.FETCH_PLAYLIST_SUCCESS:
      return {
        ...state,
        name: action.name,
        tracks: action.tracks,
        isLoading: false,
      };
    case actionsTypes.FETCH_PLAYLIST_SUCCESS:
      return {
        ...state,
        error: action.error,
      };
    case actionsTypes.SET_CURRENT_TRACK:
      return {
        ...state,
        currentTrack: action.track,
      };
    case actionsTypes.SET_RANDOM_TRACK:
      let randomTrack;
      do {
        randomTrack =
          state.tracks[Math.floor(Math.random() * state.tracks.length)];
      } while (randomTrack.id === state.currentTrack.id);
      return {
        ...state,
        currentTrack: randomTrack,
      };
    case actionsTypes.NEXT_TRACK:
      const index = state.tracks.findIndex(
        (track) => track.id === state.currentTrack.id
      );
      let nextTrack = { ...state.currentTrack };
      if (index + 1 === state.tracks.length) {
        nextTrack = state.tracks[0];
      } else {
        nextTrack = state.tracks[index + 1];
      }
      return {
        ...state,
        currentTrack: nextTrack,
      };
    case actionsTypes.PREV_TRACK:
      const index_ = state.tracks.findIndex(
        (track) => track.id === state.currentTrack.id
      );
      let prevTrack = { ...state.currentTrack };
      if (index_ === 0) {
        prevTrack = state.tracks[state.tracks.length - 1];
      } else {
        prevTrack = state.tracks[index_ - 1];
      }
      return {
        ...state,
        currentTrack: prevTrack,
      };
    default:
      return state;
  }
};

export default playlistReducer;
