import React from 'react';
import { StatusBar, Appearance } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { light, dark } from './src/global/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular });
  const colorScheme = Appearance.getColorScheme();

  return (
    <>
      <StatusBar 
        barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content' }
        backgroundColor={colorScheme === 'light' ? light.backgroundColor : dark.backgroundColor }
        translucent
      />
      { fontsLoaded ? <Routes/> : <Loading/>}
    </>
  );
}
