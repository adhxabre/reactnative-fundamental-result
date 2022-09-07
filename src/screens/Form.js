import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Form() {
  return (
    <View style={style.container}>
      <StatusBar />
      {/* Code Here */}
      <Text style={style.header}>Sign In</Text>

      <Text style={style.textStyle}>Email</Text>
      <TextInput style={style.textInput} defaultValue="ex.radif@dumbways.com" />

      <Text style={style.textStyle}>Password</Text>
      <TextInput style={style.textInput} defaultValue="ex.8E0112D!" />

      <TouchableOpacity style={style.button}>
        <Text style={style.textButton}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

// Create Variable for CSS

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    color: "#e74c3c",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#e74c3c",
    height: 45,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
  },
  textButton: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  textStyle: {
    color: "#e74c3c",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textInput: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
    color: "#95a5a6",
    borderColor: "#7f8c8d",
  },
});
