import { Routes } from "../navigation/Routes";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
} from "react-native";
import tooboGif from "../../assets/images/toobo.gif";
import { Card } from "react-native-paper";
import background from "../../assets/images/fond.jpg";

export function LoginScreen({ navigation }) {
  const [value, setValue] = useState("");

  var datas = [];
  const handleSubmit = async () => {
    try {
      if (value == null) {
        goToErreur();
      }
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=3277f7578466bf8618dd937a8df3f1f2&units=metric`
      );
      const responseWiki = await fetch(
        `https://serpapi.com/search.json?q=${value}&tbm=isch&ijn=0&api_key=b9ea58de80489d6f22b9354fe1c3b035b82c42532c964f6fcb2a3d007024ccc9`
      );
      const data = await response.json();
      const dataImage = await responseWiki.json();
      if (data.name == null || dataImage == null) {
        goToErreur();
      } else {
        datas.push(data);
        datas.push(dataImage);
        goToMeteo(datas);
      }
    } catch (error) {
      console.error(error);
    }
  };
  function goToMeteo(datas) {
    return navigation.navigate(Routes.AFFICHER_METEO, datas);
  }

  function goToErreur() {
    return navigation.navigate(Routes.ERREUR);
  }

  return (
    <ImageBackground source={background} style={styles.image}>
      <View style={styles.container}>
        <Card style={styles.flex}>
          <Card.Cover source={tooboGif} />
        </Card>

        <TextInput
          placeholder="Écrire une ville pour afficher la météo"
          style={styles.input}
          onChangeText={(text) => setValue(text)}
          value={value}
        />
        <Button title="Envoyer" onPress={handleSubmit} />
      </View>
    </ImageBackground>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "lightgray",
  },
  flex: {
    width: "80%",
    marginBottom: "10%",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    backgroundAttachment: "local",
  },
});
