import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './src/Roots/stackNav';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
