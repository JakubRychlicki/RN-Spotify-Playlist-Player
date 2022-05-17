import { View, StyleSheet, Dimensions } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";
import { useEffect } from "react";

// COMPONENTS
import { TextSFProR } from "../UI/TextFont";

// HELPERS
import { convertTime } from "../../helpers/convertTime";

let deviceWidth = Dimensions.get("window").width;

export default PlayBar = ({
  setPositionTrack,
  postitionDuration = 0,
  fullDuration = 0,
}) => {
  useEffect(() => {
    calculatePostion();
  }, [postitionDuration]);

  const calculatePostion = () => {
    if (postitionDuration !== null && fullDuration !== null) {
      return postitionDuration / fullDuration;
    }

    return 0;
  };

  let left = calculatePostion() * (deviceWidth - 50);

  return (
    <View style={styles.container}>
      <View
        style={{
          position: "relative",
          height: 20,
        }}
      >
        <TextSFProR
          style={{
            position: "absolute",
            textAlign: "center",
            left: left === NaN ? 0 : left,
            fontSize: 12,
            color: "#7E7E7E",
          }}
        >
          {postitionDuration ? convertTime(postitionDuration) : ""}
        </TextSFProR>
      </View>
      <Slider
        value={calculatePostion()}
        onValueChange={(value) => {
          let timeInMillis = value * fullDuration;
          setPositionTrack(timeInMillis);
        }}
        onSlidingComplete={() => {
          // move to next track
        }}
        // in future will be activated
        // disabled={true}
        containerStyle={{ width: "100%", height: 10 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#3C7AC7"
        maximumTrackTintColor="#CED7E3"
        trackStyle={{ height: 4 }}
        thumbStyle={{ height: 10, width: 10, backgroundColor: "#CED7E3" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
});
