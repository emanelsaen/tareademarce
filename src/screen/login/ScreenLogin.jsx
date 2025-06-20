import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { estadoPerfilGlobal } from '../../context/contextData';

export default function ScreenLogin() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const navigation = useNavigation();
    const { login } = useContext(estadoPerfilGlobal);

    const onLogin = async () => {
        if (email === '' || pw === '') {
            Alert.alert('Error', 'Por favor, complete todos los campos.');
        }else{
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "user": email,
  "password": pw
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

try {
  const response = await fetch("http://192.168.30.30:4000/api/usuario/login", requestOptions);
  const result = await response.json();
   if (result.body.status == true) {
                login(); // Cambia el estado global de login
            } else {
                Alert.alert('Error', result.body?.mensaje || 'Credenciales incorrectas.');
            }
  console.log(result)
} catch (error) {
  console.error(error);
};
        }

    };
    
console.log('Email:', email);
    console.log('Contraseña:', pw);
    return (
        <View>
            <Text style={styles.titulo}>Login</Text>
            <View style={styles.contenedor}>
                <TextInput
                    style={styles.input}
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    label="Contraseña"
                    value={pw}
                    onChangeText={setPw}
                    secureTextEntry
                />
                <Button
                    style={styles.boton}
                    icon="login"
                    mode="contained"
                    onPress={()=> onLogin()}
                >
                    Iniciar Sesión
                </Button>
                <Button
                    style={styles.botonCrear}
                    icon="account-plus"
                    mode="contained"
                    onPress={() => navigation.navigate('crearCuenta')}
                >
                    Crear cuenta
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 50,
        marginBottom: 100,
    },
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginTop: 70,
    },
    input: {
        width: '80%',
        height: 50,
        marginBottom: 60,
        backgroundColor: '#fff',
    },
    boton: {
        width: '80%',
        height: 50,
        marginBottom: 20,
        backgroundColor: '#6200ee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botonCrear: {
        width: '80%',
        height: 50,
        marginBottom: 20,
        backgroundColor: '#6200ee',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
