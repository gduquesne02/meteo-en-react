import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  Meteo from "../screens/FormulaireMeteo";
import { Erreur } from "../screens/Erreur";
import { AfficherDonnees } from "../screens/AfficherMeteo";
import { Routes } from "./Routes";

const Stack = createNativeStackNavigator();

export function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.FORMULAIRE_METEO}
        component={Meteo}
      />
      <Stack.Screen
        name={Routes.AFFICHER_METEO}
        component={AfficherDonnees}
      />
      <Stack.Screen
        name={Routes.ERREUR}
        component={Erreur}
      />
    </Stack.Navigator>
  );
}
