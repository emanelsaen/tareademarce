import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navegacion from './Navegacion';
import StateGeneral from './src/context/StateGeneral';
import StatePerfilGlobal from './src/context/StatePerfilGlobal';

export default function App() {
  return (
    <StatePerfilGlobal>
    <StateGeneral> 
    <NavigationContainer>
      <Navegacion />
    </NavigationContainer>
    </StateGeneral>
    </StatePerfilGlobal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
