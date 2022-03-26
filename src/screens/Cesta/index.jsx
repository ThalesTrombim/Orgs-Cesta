import React from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './styles';
import { Detalhes } from './components/Detalhes';
import { Item } from './components/Item';
import { Topo } from './components/Topo';
import { TextComponent } from '../../components/TextComponent';

function Cesta({ top, details, itens}) {
    return (
        <FlatList 
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome }
            ListHeaderComponent={() => {
                return (
                    <>
                        <Topo {...top}/>    
                        <View style={styles.container}>
                            <Detalhes {...details}/>
                            <TextComponent style={styles.title}>{ itens.titulo }</TextComponent>
                        </View>
                    </>
                )
            }}
        />
    )
}

export { Cesta }