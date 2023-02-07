import * as React from "react";

import  {TermsScreen}  from "./src/screens/TermsScreen";

// or any pure javascript modules available in npm

import { useState } from "react";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

const App = () => {
  return (
    // <LoginScreen />
    <StarshipFeedScreen />
  );
};

// always export default App otherwise Expo is not happy
export default App;