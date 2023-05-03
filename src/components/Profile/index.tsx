import React from "react";
import { View,Text } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";
export function Profile(){
    return(
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/iRyanRib.png"/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Hello,
                    </Text>
                    <Text style={styles.username}> 
                        Ryan
                    </Text>
                </View>
                <Text style={styles.message}>
                    How can i help you?
                </Text>
            </View>
        </View>
    )
}