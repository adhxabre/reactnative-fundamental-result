import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

//Import Screen
import Map from "./src/screens/Map";

export default function App() {
  return (
    <View style={{ marginTop: 100 }}>
      <StatusBar />
      <Map />
    </View>
  );
}
