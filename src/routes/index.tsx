import React from "react";
//Navigation container cuida das rotas passadas, furturas e presentes
//util no caso de voltar para uma tela passada por exemplo
import{DefaultTheme, NavigationContainer} from '@react-navigation/native';
import{AuthRoutes} from './auth.routes';
import { Background } from "../components/Background";
import { navTheme } from "./styles";
export function Routes(){
    return(
        <NavigationContainer
            theme={navTheme}
        >          
            <AuthRoutes/>
        </NavigationContainer>
    );
}