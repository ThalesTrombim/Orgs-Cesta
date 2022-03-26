
import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    topImage: {
        width: '100%',
        height: 578 / 768 * width,
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 26,
        color: 'white',
        padding: 16
    }, 
})