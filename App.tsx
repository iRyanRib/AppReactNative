//Ponto de partida do app
//importando fontes
import {useFonts} from 'expo-font';
import { StatusBar } from 'react-native'
import { Orbitron_400Regular } from '@expo-google-fonts/orbitron';
import { Orbitron_500Medium } from '@expo-google-fonts/orbitron';
import { Orbitron_700Bold } from '@expo-google-fonts/orbitron';
import AppLoading from 'expo-app-loading'
import React from 'react';
import { Routes} from './src/routes';
import {Background} from './src/components/Background'

export default function App(){
  const [fontsLoaded] = useFonts({//binario se a fontes estão prontas

    Orbitron_400Regular,
    Orbitron_500Medium,
    Orbitron_700Bold
  });

  if(!fontsLoaded){//verfica se foram carregadas
    return <AppLoading/>//segura a tela de splash enquanto não carrega
  }
  return(
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
      />
      <Routes/>
    </Background>
  );
}