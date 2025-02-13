import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Aprender: undefined;
  Practicar: undefined;
  Escribir: undefined;
};

// Definir el tipo de navegación para Home
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

// El componente Home
const Home = ({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <Text style={styles.title}>Aprende Italiano</Text>

      <View style={styles.buttons}>
        <Text style={styles.subtitle}>¿Qué quieres hacer hoy?</Text>

        <TouchableOpacity
          style={[styles.button, styles.aprender]}
          onPress={() => navigation.navigate('Aprender')}
        >
          <Text >Aprender Frases</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.practicar]}
          // onPress={() => navigation.navigate('Practicar')}
        >
          <Text>¿Cómo se dice?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, styles.escribir]}
          // onPress={() => navigation.navigate('Escribir')}
        >
          <Text>Escribir</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      resizeMode: 'cover',
      backgroundColor: 'rgba(120, 228, 129, 0.5)',  
  
    },
    backgroundImage: {
      opacity: 0.5, 
      resizeMode:'cover',
      transform: [
        { scale: 1 },  // Escalar la imagen un 10% más grande
      ],
    },
  
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 20,
      textAlign: 'center',
    },
    buttons:{
      flex: 1,
      flexDirection: 'column',  // 'row' es como 'display: flex' con direcciones horizontales
      justifyContent: 'center',
      gap:'20',
      alignItems: 'center',
    },
  
    button: {
      padding: 10,
      fontSize: 16,
      alignItems: 'center',
      borderRadius: 5,
      marginBottom: 10,
      width:200,
      textAlign:'center'
    },
    aprender: {
      backgroundColor: 'rgb(93, 232, 97)',
    },
    practicar: {
      backgroundColor: '#f9f9f9',
    },
    escribir: {
      backgroundColor: '#ec2424',
    },
  
  
    
  });
  

export default Home;