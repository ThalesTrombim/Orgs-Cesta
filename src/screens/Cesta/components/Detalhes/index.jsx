import { Image, View, TouchableOpacity } from 'react-native';

import { TextComponent } from '../../../../components/TextComponent';
import { styles } from './styles';

function Detalhes({ name, img, nameFarm, description, price, button }) {
    return (
        <>
            <TextComponent style={styles.name}>{name}</TextComponent>
            <View style={styles.farm}>
                <Image source={img} style={styles.ImgFarm} />              
                <TextComponent style={styles.farmName}>{nameFarm}</TextComponent>
            </View>
            <TextComponent style={styles.description}>
                {description}
            </TextComponent>
            <TextComponent style={styles.price}>
                {price}
            </TextComponent>
            <TouchableOpacity style={styles.button}>
                <TextComponent style={styles.textButton}>{button}</TextComponent>
            </TouchableOpacity>
        </>
    )
}

export { Detalhes };