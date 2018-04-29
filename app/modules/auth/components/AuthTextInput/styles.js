import { StyleSheet } from 'react-native';

import { theme } from "../../index"
const { windowWidth, fontSize, fontFamily, normalize } = theme;

const styles = StyleSheet.create({
    container:{
        marginBottom: 0
    },

    inputContainer:{
        width: windowWidth - 40,
        height: normalize(45),
        fontSize: fontSize.small,
        fontFamily: 'DosisRegular',
        borderBottomColor: "#A5A7A9",
        textAlign: 'center',
    }
});

export default styles;