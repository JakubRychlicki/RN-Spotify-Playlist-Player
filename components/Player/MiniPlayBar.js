import { View, StyleSheet } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";
import { useEffect } from "react";

export default function MiniPlayBar({
  isTrackPlay,
  fullDuration,
  postitionDuration,
}) {
  useEffect(() => {
    calculatePostion();
  }, [postitionDuration]);

  const calculatePostion = () => {
    if (postitionDuration !== null && fullDuration !== null) {
      return postitionDuration / fullDuration;
    }

    return 0;
  };

  if (isTrackPlay) {
    return (
      <View style={styles.container}>
        <Slider
          value={calculatePostion()}
          onValueChange={(value) => {
            // change the track postion duration
          }}
          onSlidingComplete={() => {
            // move to next track
          }}
          // in future will be activated
          containerStyle={{ width: "100%", height: 10, padding: 0 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#3C7AC7"
          maximumTrackTintColor="#9FCAFF"
          trackStyle={{ height: 3 }}
          thumbStyle={{ height: 8, width: 8, backgroundColor: "#3C7AC7" }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.inactiveBar}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  inactiveBar: {
    width: "100%",
    height: 1,
    backgroundColor: "#EEEEEE",
  },
});
