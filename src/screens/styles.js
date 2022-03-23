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
    container: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
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
    }
})