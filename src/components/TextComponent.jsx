import React from 'react';
import { Text, StyleSheet } from 'react-native';

function TextComponent({ children, style }) {
    let stylesComponent = styles.textRegular;

    if(style?.fontWeight === 'bold'){
        stylesComponent = styles.textBold
    }

    return (
        <Text style={[style, stylesComponent]}>
            { children }
        </Text>
    )
}

export { TextComponent };

const styles = StyleSheet.create({
    textRegular: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal'
    },
    textBold: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
})