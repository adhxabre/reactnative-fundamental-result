import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, FlatList, Text } from "react-native";
export default function List() {
  return (
    <View>
      <StatusBar />
      <Text>This is List On React</Text>
      {/* Code Here */}
      <FlatList
        data={[
          {
            name: "Iruham Sama",
          },
          {
            name: "Jody Sama",
          },
          {
            name: "Fadhil Sama",
          },
        ]}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
