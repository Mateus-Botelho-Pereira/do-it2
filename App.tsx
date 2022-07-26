import React from 'react';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular });

  return (
    <>
      { fontsLoaded ? <Routes/> : <Loading />}
    </>
  );
}
