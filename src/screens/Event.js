import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Event() {
  // Create Function Here
  function Greeting() {
    return alert("Good Morning Everyone Have a Nice Day");
  }

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <Text>If you press Click Here then an alert will appear</Text>
      <TouchableOpacity
        onPress={() => alert("Hello Full-Stack Bootcamp Participants")}
      >
        <Text>Click Here</Text>
      </TouchableOpacity>

      <Text>If you press Click Here then an alert will appear</Text>
      <TouchableOpacity onPress={Greeting}>
        <Text>Greeting</Text>
      </TouchableOpacity>
    </View>
  );
}
