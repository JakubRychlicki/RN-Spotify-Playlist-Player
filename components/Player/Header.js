import { View, StyleSheet, StatusBar, TouchableOpacity } from "react-native";

// COMPONENTS
import { TextSFProB } from "../UI/TextFont";

export default function Header({ onTouch }) {
  return (
    <TouchableOpacity onPress={onTouch}>
      <View style={styles.container}>
        <TextSFProB style={styles.text}>Now Playing!</TextSFProB>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#EEEEEE",
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 18,
    color: "#1E2022",
  },
});
