
import React from 'react';
import {  Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Componentes/Home';
import Aprender from './Componentes/Aprender';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => (
              <Image
                source={require('./assets/images/logo.png')} // Ruta a tu logo
                style={{ width: 150, height: 50, resizeMode: 'contain' }} // Tamaño del logo
              />
            ),
            headerStyle: {
              backgroundColor: 'rgba(120, 228, 129, 0.7)', // Cambia el color de fondo de la barra (puedes usar cualquier color aquí)
            },
            headerTintColor: 'rgb(255, 255, 255)', // Cambia el color del texto o íconos en la barra de navegación (opcional)
          }}
        />
        <Stack.Screen
          name='Aprender'
          component={Aprender}
          options={{
            headerTitle: () => (
              <Image
                source={require('./assets/images/logo.png')} // Ruta a tu logo
                style={{ width: 150, height: 50, resizeMode: 'contain' }} // Tamaño del logo
              />
            ),
            headerStyle: {
              backgroundColor: 'rgba(120, 228, 129, 0.7)', // Cambia el color de fondo de la barra (puedes usar cualquier color aquí)
            },
            headerTintColor: 'rgb(255, 255, 255)', // Cambia el color del texto o íconos en la barra de navegación (opcional)
          }}
        />
        {/* <Stack.Screen
          name='Practicar'
          component={Practicar}
          options={{
            headerTitle: () => (
              <Image
                source={require('./assets/images/logo.png')} // Ruta a tu logo
                style={{ width: 150, height: 50, resizeMode: 'contain' }} // Tamaño del logo
              />
            ),
            headerStyle: {
              backgroundColor: 'rgba(120, 228, 129, 0.7)', // Cambia el color de fondo de la barra (puedes usar cualquier color aquí)
            },
            headerTintColor: 'rgb(255, 255, 255)', // Cambia el color del texto o íconos en la barra de navegación (opcional)
          }}
        />
        <Stack.Screen
          name='Escribir'
          component={Escribir}
          options={{
            headerTitle: () => (
              <Image
                source={require('./assets/images/logo.png')} // Ruta a tu logo
                style={{ width: 150, height: 50, resizeMode: 'contain' }} // Tamaño del logo
              />
            ),
            headerStyle: {
              backgroundColor: 'rgba(120, 228, 129, 0.7)', // Cambia el color de fondo de la barra (puedes usar cualquier color aquí)
            },
            headerTintColor: 'rgb(255, 255, 255)', // Cambia el color del texto o íconos en la barra de navegación (opcional)
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
    // <Home/>
  );
}




