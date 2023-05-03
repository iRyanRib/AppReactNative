import React ,{ReactNode} from "react";

import {styles} from './styles'
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";

type Props = {//elemento filho com efeito de gradiente
    children:ReactNode;
}

export function Background({children}:Props){
    const{secondary0,secondary100} = theme.colors;
    return(   
        <LinearGradient
            style={styles.container}
            colors={[secondary0,secondary100]}
        >
            {children}
        </LinearGradient>
    )


}