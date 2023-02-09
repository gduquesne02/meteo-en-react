import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import { Card } from "react-native-paper";
import localImage from "../../assets/images/david.gif";

const Item2 = () => (
  <Card style={styles.item}>
    <Card.Content>
      <Card.Cover source={localImage} />
      <Text style={styles.title}>
        Il semblerait que vous avez tapé quelque chose d'incorrect
      </Text>
    </Card.Content>
  </Card>
);

export const Erreur = () => {
  return (
    <SafeAreaView>
      <Item2 />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "lightgrey",
    padding: 20,
    marginVertical: "35%",
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    paddingTop: 12,
  },
});
