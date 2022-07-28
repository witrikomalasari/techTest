import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import store from './src/Redux/store';
import Router from './src/Roots/stackNav';
import {LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <FlashMessage position="top" />
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
