import { View, StyleSheet } from "react-native";

// COMPONENTS
import { TextSFProB } from "../UI/TextFont";
import IconButton from "../UI/IconButton";

export default function PlaylistDetail({ name }) {
  return (
    <View style={styles.container}>
      <View>
        <TextSFProB style={styles.label}>PLAYLIST</TextSFProB>
        <TextSFProB style={styles.name}>{name}</TextSFProB>
      </View>
      <IconButton
        name="ARROW_DOWN"
        size={30}
        color="#77838F"
        onTouch={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    paddingVertical: 15,
    paddingHorizontal: 14,
  },
  label: {
    fontSize: 12,
    color: "#77838F",
    letterSpacing: 0.75,
  },
  name: {
    fontSize: 14,
    color: "#1E2022",
  },
});
