import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation();


  return (

    <View style={styles.container} >


      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.titulo}>Mais que farmácia, é uma assistência.</Text>
        <Text style={styles.texto}>Explore a experiência de poder encontrar tudo o que você deseja em um só lugar.</Text>

        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#4BA3C3'


  },

  logo: {
    width: 202,
    height: 131
  },

  containerLogo: {
    flex: 2,
    backgroundColor: '#4BA3C3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },

  texto: {
    color: '#A1a1a1'
  },

  button: {
    position: 'absolute',
    backgroundColor: '#4BA3C3',
    paddingVertical: 8,
    borderRadius: 50,
    width: '60%',
    alignSelf: 'center',
    bottom: '19%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',

  }


})