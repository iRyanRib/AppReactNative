import React from "react";
import{
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';

import OpenAImg from '../../assets/openai.png';
import {styles} from './styles';

type Props = TouchableOpacityProps &{//as minhas propriedades recebem as propriedades de TouchableOpacity e as que criei
    title:string;
}
export function ButtonIcon({title, activeOpacity, ...rest}:Props){
    return(
        <TouchableOpacity 
            style={styles.container}
            {...rest}//pega todo o restante das propriedades
        
        >
            <View style={styles.iconWrapper}>
                <Image source={OpenAImg} style={styles.icon}/>
            </View>
            <Text style={styles.title}>
                {title}
            </Text>

        </TouchableOpacity>
        
    );
}