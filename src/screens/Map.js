import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export default function Map() {
  // Create Dummy Data With Array
  const cars = ["BMW", "Mercedes-Benz", "Bugati", "Lexus"];

  return (
    <View>
      <StatusBar />
      <Text>This is List On React</Text>
      {/* Code Here */}
      {cars.map((car) => (
        <Text key={car}>{car}</Text>
      ))}
    </View>
  );
}
