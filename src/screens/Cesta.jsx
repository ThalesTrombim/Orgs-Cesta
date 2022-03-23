import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import top from '../../assets/topo.png';
import logo from '../../assets/logo.png'
import { TextComponent } from '../components/TextComponent';

function Cesta() {
    return (
        <>
            <Image style={styles.topImage} source={top}/>
            <TextComponent style={styles.title}>Detalhe da cesta</TextComponent>
            <View style={styles.container}>
                <TextComponent style={styles.name}>Cesta de Verduras</TextComponent>
                <View style={styles.farm}>
                    <Image source={logo} style={styles.ImgFarm} />              
                    <TextComponent style={styles.farmName}>Jenny Jack Farm</TextComponent>
                </View>
                <TextComponent style={styles.description}>
                    Uma cesta de produtos cuidadosamente 
                    selecionados da fazenda direto para sua cozinha
                </TextComponent>
                <TextComponent style={styles.price}>
                    R$ 40,00
                </TextComponent>
            </View>
        </>
    )
}

export { Cesta }