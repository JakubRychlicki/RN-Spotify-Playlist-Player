import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// DISPATCH ACTIONS
import { setCurrentTrack } from "../../store/actions/playlist";

// COMPONENTS
import { TextSFProR, TextNunito } from "../UI/TextFont";
import IconButton from "../UI/IconButton";
import MiniPlayBar from "./MiniPlayBar";

// HELPERS
import { convertTime } from "../../helpers/convertTime";

export default TrackItem = ({ track, postitionDuration }) => {
  const dispatch = useDispatch();
  const currTrack = useSelector((state) => state.playlist.currentTrack);
  const { id, name, fullDuration } = track;

  let isTrackPlay = id == currTrack?.id;

  // Play a track
  const playTrack = async () => {
    dispatch(setCurrentTrack(track));
  };

  return (
    <View style={styles.itemContainer}>
      <View style={[styles.playIconBox, styles.centerItem]}>
        <IconButton
          name="PLAY_OUTLINE"
          size={22}
          color="#3C7AC7"
          onTouch={playTrack}
        />
      </View>
      <View
        style={{
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <View style={{ flexDirection: "row", flexGrow: 1 }}>
          <View style={styles.trackNameBox}>
            <TextSFProR style={styles.trackName} numberOfLines={1}>
              {name}
            </TextSFProR>
          </View>
          <View style={[styles.trackTimeBox, styles.centerItem]}>
            <TextNunito style={styles.trackTime}>
              {isTrackPlay
                ? convertTime(postitionDuration)
                : convertTime(fullDuration)}
            </TextNunito>
          </View>
          <View style={[styles.optionsIconBox, styles.centerItem]}>
            <IconButton
              name="OPTIONS"
              size={22}
              color="#4D4D4D"
              onTouch={() => {}}
            />
          </View>
        </View>
        <MiniPlayBar
          isTrackPlay={isTrackPlay}
          fullDuration={fullDuration}
          postitionDuration={postitionDuration}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    height: 50,
  },
  playIconBox: {
    paddingHorizontal: 10,
  },
  trackNameBox: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "center",
  },
  trackName: {
    color: "#77838F",
    fontSize: 14,
  },
  trackTimeBox: {
    flexBasis: 70,
  },
  trackTime: {
    color: "#77838F",
  },
  optionsIconBox: {
    flexBasis: 50,
  },
  centerItem: {
    alignItems: "center",
    justifyContent: "center",
  },
});
