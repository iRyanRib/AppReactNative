import React, { useState } from 'react';
import {View, Text, TextInput,Image} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/robot5.png';
import { styles} from './styles';

export function SignIn(){

  return(
    <View style={styles.container}>
      <Image 
        source={IllustrationImg}
        style = {styles.image}
        resizeMode= "stretch"
      />

      <View style = {styles.content}> 
        <Text style={styles.title}>
          The Future in your own hands
        </Text>
        <Text style = {styles.subtitle}>
          Organize your life and get tasks done {'\n'}
          in seconds
        </Text>
        <ButtonIcon 
          title="Entrar com OpenAI"
          activeOpacity={0.7}
        />
      </View>

    </View>
  );
}