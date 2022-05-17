import { FlatList, SafeAreaView } from "react-native";

// COMPONENTS
import TrackItem from "./TrackItem";

export default function TrackList({ tracks, isPlayerOn, postitionDuration }) {
  return (
    <SafeAreaView style={{ flex: 1, marginBottom: isPlayerOn ? 90 : 0 }}>
      <FlatList
        data={tracks}
        renderItem={({ item }) => (
          <TrackItem track={item} postitionDuration={postitionDuration} />
        )}
        keyExtractor={(track) => track.id}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </SafeAreaView>
  );
}
