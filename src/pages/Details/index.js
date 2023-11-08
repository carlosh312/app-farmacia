import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,

} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../colors/colors';



export default Detalhes = ({ route, navigation }) => {

    const { item } = route.params;


    return (
        <View style={styles.container}>
            
            {/*Header*/}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <Feather name='chevron-left' size={12} color-={colors.textDark} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerRigth}>
                        <Image source={require('../../../assets/logo.png')} style={styles.iconImage} />
                    </View>
                </View>
            </SafeAreaView>

            <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false}>

            {/* Image Product */}
            <View style={styles.cardImageProduct}>
                <View style={styles.cardImage}>
                    <Image source={item.image} style={styles.itemImage} />
                </View>
            </View>

            {/* Descrição do Produto */}

            <View style={styles.descricao}>
                <Text style={styles.descricaoTittle}>{item.title}</Text>
                <View>
                    <Text style={styles.descricaoTextMarca}>{item.marca}</Text>
                </View>
                <View>
                    <Text style={styles.descricaoText}>{item.description}</Text>
                </View>
            </View>
            </ScrollView>

            {/* Botão Comprar agora e Preço */}

            <View style={styles.cardPriceButton}>
                <View>
                    <Text style={styles.priceItem}><Text style={styles.subTextPrice}>R$</Text>{item.price}</Text>
                </View>

                <TouchableOpacity onPress={() => alert('Seu produto foi reservado e adicionado ao carrinho!')}>
                    <View style={styles.botaoCarrinho}>
                        <Text style={styles.botaoCarrinhoTexto}>Reservar agora</Text>
                    </View>
                </TouchableOpacity>

            </View>



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


    headerLeft: {
        borderColor: colors.textLight,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10,
    },

    cardImageProduct: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e9e9e9',
        width: 310,
        height: 360,
        marginTop: 16,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 5
    },

    itemImage: {
        width: 155,
        height: 288
    },

    descricao: {
        marginTop: 20,
    },

    descricaoTittle: {
        paddingHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 22,
        color: '#003459',
        textTransform: 'uppercase'
    },

    descricaoTextMarca: {
        paddingHorizontal: 20,
        color: '#383838',
        padding: 5,
        fontWeight: 'bold'
    },

    descricaoText: {
        paddingHorizontal: 20,
        marginTop: 3,
        letterSpacing: 1,
        color: '#414141',
        fontSize: 14,
        fontStyle: 'normal',
        lineHeight: 20
    },

    cardPriceButton:{
        marginTop: 10,
        borderWidth: 0.5,
        borderColor: '#eceded',
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    botaoCarrinho: {
        paddingRight: 32,
        paddingLeft: 32,
        paddingTop: 16,
        paddingBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#003459'
},

    botaoCarrinhoTexto: {
    color: '#fff',
    fontSize: 14,
    marginRight: 10,
    
},

    priceItem:{
        fontSize: 30,
        color: '#003459',
        fontWeight: 'bold'
    },

    subTextPrice:{
        fontSize: 12,
        color: '#BBB'
    }


})
