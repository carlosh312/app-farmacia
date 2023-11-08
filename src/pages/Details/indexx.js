import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,

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

            {/* Titulos */}
            <View style={styles.tituloWrapper}>
                <Text style={styles.titulo}>{item.title}</Text>
            </View>

            {/* Preço */}
            <View style={styles.preco}>
                <Text style={styles.precoText}>R$ {item.price}</Text>
            </View>

            {/* Informações do Produto */}
            <View style={styles.info}>
                <View style={styles.infoLeft}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTituloItem}>Tamanho</Text>
                        <Text style={styles.infoTextItem}>
                            {item.sizeName} {item.sizeNumber}
                        </Text>
                    </View> 
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTituloItem}>Marca</Text>
                        <Text style={styles.infoTextItem}>
                            {item.marca} 
                        </Text>
                    </View> 
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTituloItem}>Sabor</Text>
                        <Text style={styles.infoTextItem}>
                            {item.sabor} 
                        </Text>
                    </View> 
                </View>
                <View style={styles.infoRight}>
                    <Image source={item.image} style={styles.itemImage} />
                </View>
            </View>

            {/* Descrição do Produto */}

            <View style={styles.descricao}>
                <Text style={styles.descricaoTittle}>Descrição</Text>
                <View>
                    <Text style={styles.descricaoText}>{item.description}</Text>
                </View>
            </View>

             {/* Botão Comprar agora */}

             <TouchableOpacity onPress={() => alert('Seu produto foi adicionado ao carrinho!')}>
                <View style={styles.botaoCarrinho}>
                    <Text style={styles.botaoCarrinhoTexto}>Comprar agora</Text>
                </View>
             </TouchableOpacity>


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

    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 34
    },
    headerLeft: {
        borderColor: colors.textLight,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10,
    },
    headerRigth: {},

    tituloWrapper: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.textDark,
        width: '50%'
    },

    preco: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    precoText: {
        color: colors.price,
        fontSize: 32,
        fontWeight: 'bold'
    },

    info:{
        marginTop:60,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    infoLeft:{
        paddingLeft: 20
    },
    infoItem:{
        marginBottom: 20
    },
    infoTituloItem:{
        fontFamily: 'Montserrant-Medium',
        fontSize: 14,
        color: colors.textLight
    },
    infoTextItem:{
        fontFamily: 'Montserrant-Medium',
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.textDark
    },
    infoRight:{},
    itemImage:{
        resizeMode: 'contain'
    },

    descricao :{
        marginTop: 20, 
        backgroundColor: '#e9e9e9',
        borderRadius: 30,
    },
    descricaoTittle:{
        paddingHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.textDark
    },
    descricaoText:{
        paddingHorizontal: 20,
        marginTop: 5,
        letterSpacing: 1

    },

    botaoCarrinho:{
        marginTop: 35,
        marginHorizontal:20,
        backgroundColor: colors.price,
        borderRadius: 50,
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoCarrinhoTexto:{
        fontWeight: 'bold',
        fontSize: 14,
        marginRight: 10
    },

    
})
