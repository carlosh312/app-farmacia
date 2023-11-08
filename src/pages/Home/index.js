import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    ScrollView
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import categoriesData from '../../data/categoriesData';
import popularData from '../../data/popularData';
import colors from '../../colors/colors';
import { NavigationContainer } from '@react-navigation/native';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Home = (props) => {
    const renderCategoryItem = ({ item }) => {
        return (
            <View style={styles.categorias}>
                <Image source={item.image} style={styles.caterogiaImagem} />
                {/*<Text style={styles.categoriaTexto}>{item.title}</Text>*/}
            </View>


        )
    }

    return (

        <View style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false}>
                {/*Header */}
                <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <Feather name="menu" size={32} color={colors.textDark} />
                        <Image source={require('../../../assets/logo.png')} style={styles.iconImage} />
                    </View>
                </SafeAreaView>


                {/* Titilo*/}
                <View style={styles.tituloHearder}>
                    <Text style={styles.tituloSubtitulo}>Hey,</Text>
                    <Text style={styles.tituloTitulo}>Carlos Henrique</Text>
                </View>

                {/* Procura*/}
                <View style={styles.areaProcura}>

                    <Feather name='search' size={22} color={colors.textDark} />
                    <View style={styles.procura}>
                        <Text style={styles.textoProcura}>  O que você está procurando hoje?</Text>
                    </View>
                </View>
                {/* imagem pontos */}
                <View>
                    <Image source={require('../../../assets/pontos.png')} style={styles.pontosImage} />
                </View>

                {/* Categorias */}
                <View style={styles.categories}>
                    <View style={styles.categoriasBoxTexto}>
                        <Text style={styles.categoriesText} > Categorias </Text>
                        <Text style={styles.categoriesText} > Todas </Text>
                    </View>

                    <View style={styles.categoriesList}>
                        <FlatList
                            data={categoriesData}
                            renderItem={renderCategoryItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/*Novidades*/}
                <View style={styles.novidadesCard}>
                    <View style={styles.novidadesCardsTexto}>
                        <Text style={styles.novidadesText} > Novidades </Text>
                        <Text style={styles.novidadesText} > Todas </Text>
                    </View>
                    {popularData.map((item) => (
                        <TouchableOpacity key={item.id} 
                        onPress={() => props.navigation.navigate('Details', {
                            item:item,
                        })}>
                            <View
                                style={[
                                    styles.novidadesCard2,
                                    {
                                        marginTop: item.id == 1 ? 10 : 20,
                                    },
                                ]}>
                                <View>
                                    <View>
                                        <View style={styles.novidadesCard1}>
                                            <MaterialCommunityIcons name='crown'
                                                size={12}
                                                color={colors.primary} />
                                            <Text style={styles.novidadesCard1Text}>Novidades da semana</Text>
                                        </View>
                                        <View style={styles.novidadesCardTitulos}>
                                            <Text style={styles.novidadesCardTitulosTitlo}>{item.title}</Text>
                                            <Text style={styles.novidadesCardTitulosWeight}>
                                                {item.weight}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.novidadesCardBotao}>
                                        <View style={styles.addBotaoCard}>
                                            <Feather name='plus' size={10} color={colors.textDark} />
                                        </View>
                                        <View style={styles.avaliacaoCard}>
                                            <MaterialCommunityIcons name='star' size={10} color={colors.textDark} />
                                            <Text style={styles.avaliacao}>{item.rating}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.novidadesCardLuz}>
                                    <Image source={item.image} style={styles.novidadesCardImage} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 34,
        alignItems: 'center'
    },

    iconImage: {
        width: 53,
        height: 45,
        paddingTop: 39,
    },

    tituloHearder: {
        marginTop: 30,
        paddingHorizontal: 20,
    },

    tituloSubtitulo: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 26,
        color: colors.textDark,
    },

    tituloTitulo: {
        fontWeight: 'bold',
        fontSize: 32,
        color: colors.textDark,
        marginTop: 4,

    },

    areaProcura: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
    },

    procura: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
    },

    textoProcura: {
        fontSize: 14,
        marginBottom: 5,
        color: colors.textLight,
    },

    pontosImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 361,
        height: 57,
        marginTop: 25,
        resizeMode: 'contain',
    },

    categories: {
        marginTop: 25,

    },

    categoriesText: {
        color: '#383838',
        fontWeight: 'bold',
        fontSize: 17,
        paddingHorizontal: 20,
        fontWeight: 'bold'
    },

    categoriasBoxTexto: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },


    categoriesList: {
        paddingTop: 15,
        paddingBottom: 20,
    },

    categorias: {

        width: 60,
        height: 60,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: '#DEDEDE',
        alignItems: 'center',
        justifyContent: 'center'
    },

    caterogiaImagem: {
        width: 20,
        height: 20,
    },

    categoriaTexto: {

        color: '#545454',
    },


    novidadesCard: {
        paddingBottom: 30,
        paddingHorizontal: 20

    },

    novidadesCardsTexto: {

        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    novidadesText: {
        color: '#383838',
        fontWeight: 'bold',
        fontSize: 17,
        paddingHorizontal: 20,
        fontWeight: 'bold'
    },



    novidadesCard1: {
        flexDirection: 'row',
        alignItems: 'center'

    },

    novidadesCard1Text: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: 'bold'
    },


    novidadesCard2: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden'
    },

    novidadesCardTitulos: {
        marginTop: 20,

    },

    novidadesCardTitulosTitlo: {
        fontWeight: 'bold',
        fontSize: 14,


    },

    novidadesCardTitulosWeight: {
        fontSize: 12,
        color: colors.textLight,
        marginTop: 5

    },

    novidadesCardBotao: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20
    },

    addBotaoCard: {
        backgroundColor: '#4BA3C3',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25
    },

    avaliacaoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },

    avaliacao: {
        fontWeight: 'bold',
        fontSize: 12,
        color: colors.textDark,
        marginLeft: 5
    },

    novidadesCardLuz: {
        marginLeft: 40
    },

    novidadesCardImage: {
        width: 170,
        height: 120,
        resizeMode: 'contain'
    }
});
