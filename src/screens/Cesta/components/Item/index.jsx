import { View, Image } from 'react-native';

import { TextComponent } from '../../../../components/TextComponent';
import { styles } from './styles';

function Item({ item: { nome, imagem}}) {
    return (
        <View style={styles.container}>
            <Image source={imagem} style={styles.image}/>
            <TextComponent style={styles.textItem}>{nome}</TextComponent>
        </View>
    )
}

export { Item };