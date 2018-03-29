import { StyleSheet } from 'react-native';

import { theme } from "../../index"
const  { color, padding, windowWidth, normalize, fontSize, fontFamily } = theme;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        width: windowWidth * 3/4
    },
    formContainer: {
        flex: 1,
        backgroundColor: color.white,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:2,
    },

    errorText:{
        color: color.red,
        width: (windowWidth - 45),
        marginTop: 20,
    },

    button:{
        backgroundColor:"#ffab00",
        height: normalize(45),
        marginTop:5,
        marginBottom:0,
        paddingHorizontal: padding * 3,
        justifyContent: 'center',
        width: windowWidth * 3/4
    },

    buttonText:{
        fontSize: fontSize.small,
        fontFamily: 'DosisRegular',
        color: color.white
    },

    forgotText:{
        textAlign:"center",
        color:color.black,
        marginBottom: padding,
        fontSize: fontSize.regular,
        fontFamily: fontFamily.medium,
    }
});


export default styles;