import * as actionsTypes from "./actionsTypes";
import { fetchPlaylist } from "./playlist";

const client_id = "6d9dc0424e794ffcbbd9ed167a62669d";
const client_secret = "9bc967f16c1647fba8f72c0386a557f0";

export const fetchTokenAuth = () => {
  return async (dispatch) => {
    dispatch({ type: actionsTypes.FETCH_TOKEN_START });
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        client_id +
        "&client_secret=" +
        client_secret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).catch((err) => {
      dispatch({ type: actionsTypes.FETCH_TOKEN_FAIL, error: err });
    });

    const resData = await response.json();

    dispatch({
      type: actionsTypes.FETCH_TOKEN_SUCCESS,
      token: resData.access_token,
    });

    dispatch(fetchPlaylist(resData.access_token));
  };
};
