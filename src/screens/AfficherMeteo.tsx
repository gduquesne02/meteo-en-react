import React from "react";
import { SafeAreaView, StyleSheet, Text, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import imageNotFound from "../../assets/images/imageNotFound.gif";

export const AfficherDonnees = ({ route }) => {
  const nomVille = route.params[0].name;
  var vitesseVent = route.params[0].wind.speed * 3.6;
  let vitesseString = String(vitesseVent);
  var imageVille;
  vitesseString.substr(0, 7);
  var dateLevee = route.params[0].sys.sunrise;
  var dateCouche = route.params[0].sys.sunset;

  if (route.params[1].suggested_searches[0].thumbnail == null) {
    imageVille = imageNotFound;
  } else {
    imageVille = route.params[1].suggested_searches[0].thumbnail;
  }

  dateLevee = unixUTCtoLocal(dateLevee);
  dateCouche = unixUTCtoLocal(dateCouche);

  const levee = "Levée : " + dateLevee;

  const couche = "Couché : " + dateCouche;

  function unixUTCtoLocal(timestamp) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(timestamp * 1000);

    // Hours part from the timestamp
    var hours = date.getHours();

    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();

    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    return formattedTime;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>Météo de {nomVille}</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.h1}>Temps actuelle : </Text>
            <Text style={styles.h2}>{route.params[0].weather[0].main}</Text>
            <Text style={styles.h3}>
              {route.params[0].weather[0].description}
            </Text>

            <Text></Text>
            <Text style={styles.h1}>Vitesse du vent : </Text>
            <Text style={styles.h2}>{vitesseString} Km/h</Text>

            <Text></Text>
            <Text style={styles.h1}>Taux de nuages : </Text>
            <Text style={styles.h2}>{route.params[0].clouds.all} %</Text>

            <Text></Text>
            <Text style={styles.h1}>Levée / couché du soleil : </Text>
            <Text style={styles.h3}>{levee}</Text>
            <Text style={styles.h3}>{couche}</Text>

            <Text></Text>
            <Text style={styles.h2}>
              Longitude : {route.params[0].coord.lon}
            </Text>
            <Text style={styles.h2}>
              Latitude : {route.params[0].coord.lat}
            </Text>

            <Text></Text>
            <Text style={styles.h3}>Photo de {nomVille} : </Text>
            <Text></Text>
          </Card.Content>
          <Card.Cover
            style={styles.imageVille}
            source={{ uri: route.params[1].suggested_searches[0].thumbnail }}
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "lightgrey",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    padding: 10,
    backgroundColor: "lightgrey",
    textAlign: "center",
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 16,
  },
  h1: {
    fontSize: 28,
  },
  card: {
    backgroundColor: "#E3E3DD",
    padding: 50,
  },
  imageVille: {
    width: 300,
    height: 200,
    zIndex: 1,
  },
});
