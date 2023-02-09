import * as React from "react";


// or any pure javascript modules available in npm

import {Navigator} from "./src/navigation/Navigator"
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    // <LoginScreen />
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
};

// always export default App otherwise Expo is not happy
export default App;
