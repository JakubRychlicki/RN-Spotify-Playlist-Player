import { View } from "react-native";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTokenAuth } from "../store/actions/auth";

// COMPONENTS
import Loading from "../components/UI/Loading";
import PlaylistScreen from "./PlaylistScreen";

export default function AuthScreen() {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.playlist.tracks);

  useEffect(() => {
    dispatch(fetchTokenAuth());
  }, []);

  if (tracks) {
    return (
      <View style={{ flex: 1 }}>
        <PlaylistScreen />
      </View>
    );
  }
  return <Loading />;
}
