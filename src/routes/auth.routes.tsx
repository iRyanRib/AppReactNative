import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{Home} from '../screens/Home'
import{SignIn} from '../screens/Signin'
import { Background } from "../components/Background";


const Stack =createStackNavigator();

export function AuthRoutes(){
    return(
        <Stack.Navigator  
            screenOptions={{
                headerShown:false,
            }}
        >
            <Stack.Screen
                name="SignIn"
                component={SignIn}       
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    );
}

