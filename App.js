import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/Navigator/MealsNavigator';

import * as Font from 'expo-font';

import { AppLoading } from 'expo';

const loadFont = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
  })
}

export default function App() {

  const [fontLoaded, setfontLoaded] = useState(false);

  if(!fontLoaded) {
    return <AppLoading startAsync={ loadFont } onFinish={() =>  setfontLoaded(true)} />
  }

  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
