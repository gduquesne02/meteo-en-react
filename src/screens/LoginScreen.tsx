import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { TextInput, Button, Card } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import SafeAreaView from "react-native-safe-area-view";
import { useState } from "react";
import { TermsScreen } from "./TermsScreen";


export function LoginScreen() {
  const [text, setText] = useState();

  function handleClick() {
    console.log("clic");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>SpaceCraft</Text>

      <Card>
        <TextInput
          style={styles.input}
          label="Email"
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          style={styles.input}
          label="Password"
          onChangeText={(text) => setText(text)}
        />

        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log("Connecté")}
        >
          Se connecter
        </Button>
        <Text style={styles.link} onPress={TermsScreen}>
          Read terms and conditions
        </Text>
      </Card>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "lightblue",
    padding: 30,
  },
  input: {
    margin: 10,
  },
  button: {
    margin: 50,
  },
  link: {
    textAlign: "center",
    margin: 10,
  },
});