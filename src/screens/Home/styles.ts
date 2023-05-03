import {StyleSheet} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';//bug tela do iphone

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        width:'100%',
        paddingHorizontal:24,
        flexDirection:'row',//um do lado do outro
        justifyContent:'space-between',//ocupe as extremidades colado nos limites
        marginTop: getStatusBarHeight()+26,
        marginBottom:42,
     }
})