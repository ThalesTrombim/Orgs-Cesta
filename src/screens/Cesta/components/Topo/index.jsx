import React from 'react';
import { Image } from 'react-native'

import { styles } from './styles';
import top from '../../../../../assets/topo.png';
import { TextComponent } from '../../../../components/TextComponent';

function Topo({ title }) {
    return (
        <>
            <Image style={styles.topImage} source={top}/>
            <TextComponent style={styles.title}>{title}</TextComponent>
        </>
    )
}

export { Topo };