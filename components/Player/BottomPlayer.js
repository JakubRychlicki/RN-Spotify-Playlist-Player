import { View, StyleSheet, Image, Dimensions, StatusBar } from "react-native";

// COMPONENTS
import { TextSFProR } from "../UI/TextFont";
import IconButton from "../UI/IconButton";
import AnimatedViewY from "../UI/AnimatedView";

const height = Dimensions.get("screen").height;
const windowHeight = Dimensions.get("window").height;
const navbarHeight = height - windowHeight - StatusBar.currentHeight;

export default function Player({ track, toggle, next, prev, isPlaying }) {
  if (track) {
    const { name, artists } = track;

    return (
      <AnimatedViewY
        style={styles.container}
        from={height}
        to={height - (height - windowHeight) - 80}
      >
        <View style={styles.trackInfoBox}>
          <Image style={styles.trackImg} />
          <View>
            <TextSFProR style={styles.trackDesc} numberOfLines={1}>
              {name}
            </TextSFProR>
            <TextSFProR style={styles.trackDesc} numberOfLines={1}>
              {artists}
            </TextSFProR>
          </View>
        </View>
        <View style={styles.playerBox}>
          <IconButton
            name="BACKWARD"
            size={17}
            color="#ffffff"
            onTouch={prev}
          />
          {isPlaying ? (
            <IconButton
              name="PAUSE_OUTLINE"
              size={25}
              color="#3C7AC7"
              onTouch={toggle}
            />
          ) : (
            <IconButton
              name="PLAY_OUTLINE"
              size={25}
              color="#ffffff"
              onTouch={toggle}
            />
          )}
          <IconButton name="FORWARD" size={17} color="#ffffff" onTouch={next} />
        </View>
      </AnimatedViewY>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    height: 80,
    backgroundColor: "#3C7AC7",
    borderTopLeftRadius: 24,
    borderTopEndRadius: 24,
    paddingHorizontal: 30,
  },
  trackInfoBox: {
    flex: 1,
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  trackImg: {
    width: 40,
    height: 40,
    backgroundColor: "#C6C6CA",
    borderRadius: 20,
  },
  trackDesc: {
    marginHorizontal: 15,
    fontSize: 12,
    color: "#FFFFFF",
  },
  playerBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexBasis: 95,
  },
});
