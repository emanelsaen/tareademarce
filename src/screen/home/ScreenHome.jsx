import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { contadorGeneral } from '../../context/contextData';
import { Card } from 'react-native-paper';
import React, { useContext } from 'react';


export default function ScreenHome() {
 const navigation = useNavigation();

const {contador, sumar, restar}= useContext(contadorGeneral);
console.log(contador);

  return (
    <View>
      <Text>ScreenHome</Text>
      <Button icon="" mode="contained" onPress={navigation.push('')}>
        Press me
      </Button>
      <Card>
        <Text>
        Suma: {contador}
        </Text>
        <Button onPress={()=>sumar()}>Sumar</Button>
        <Button onPress={()=>restar()}>restar</Button>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})