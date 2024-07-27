import Checkbox from "@/components/Checkbox";
import { Cuisines } from "@/lib/contants";
import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const { top } = useSafeAreaInsets();
  const [cuisines, setCuisines] = useState(Cuisines);

  const toggleCuisine = useCallback((id: number) => {
    setCuisines((prevCuisines) =>
      prevCuisines.map((cuisine) =>
        cuisine.id === id
          ? { ...cuisine, selected: !cuisine.selected }
          : cuisine
      )
    );
  }, []);

  return (
    <View
      style={{
        ...styles.container,
        paddingTop: top + 20,
      }}
    >
      <StatusBar style="auto" />
      <Text style={styles.title}>What are your Favorite Cuisines</Text>
      <View style={styles.listContainer}>
        {cuisines.map((cuisine) => (
          <Checkbox
            key={cuisine.id}
            label={cuisine.name}
            checked={cuisine.selected}
            onPress={() => {
              toggleCuisine(cuisine.id);
            }}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 24,
  },
});
