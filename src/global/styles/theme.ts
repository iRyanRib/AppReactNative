import {
    DefaultTheme,
    NavigationContainer,
  } from '@react-navigation/native';
  
export const theme = {
    colors:{
        background:'#8F43EE',
        heading:'#ffff',
        secondary100:'#2d154a',
        secondary25:'#6530a7',
        secondary50:'#7136bb',
        secondary75:'#6530a7',
        secondary0:'#8f43ee',
        primary:'#413543',
    },
    fonts:{
        title700:'Orbitron_700Bold',
        title500:'Orbitron_500Medium',
        text400:'Orbitron_400Regular',
    }
}
export const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };