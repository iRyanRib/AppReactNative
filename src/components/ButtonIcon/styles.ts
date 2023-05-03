import {StyleSheet} from'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        width: '80%',
        height:56,
        backgroundColor:theme.colors.secondary0,
        borderRadius:8,
        opacity:0.5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:30
        
    },
    title:{
        flex:1,
        color:theme.colors.heading,
        fontSize:20,
        textAlign:'center',
        fontFamily:theme.fonts.text400
    },
    iconWrapper:{
        width:56,
        height:56,
        justifyContent:'center',
        alignItems:'center',
        borderRightWidth:1,
        borderColor:theme.colors.primary,
        
    },
    icon:{
        width:40,
        height:24,
        resizeMode:"stretch",
        
    }
})