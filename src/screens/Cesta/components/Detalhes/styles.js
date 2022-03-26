import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    name: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    farm: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    ImgFarm: {
        width: 32,
        height: 32
    },  
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    description: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: '#2A9F85',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        marginTop: 8
    },
    button: {
        marginTop: 16,
        backgroundColor: '#2A9F75',
        paddingVertical: 16,
        borderRadius: 6,
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    }
});