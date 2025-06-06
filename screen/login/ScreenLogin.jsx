import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default function ScreenLogin() {
    const [email, setEmail] = React.useState("");
    const [text, setText] = React.useState("");
    const navigation = useNavigation();
    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 30, marginTop: 50, marginBottom: 100 }}>Login</Text>
            <View style={styles.contenedor}>
                <TextInput
                    style={styles.input}
                    label="Email"
                    value={email}
                    onChangeText={email => setEmail(email)
                    }
                />
                <TextInput
                    style={styles.input}
                    label="Contraseña"
                    value={text}
                    onChangeText={text => setText(text)
                    }
                />
                <Button style={styles.boton} icon="login" mode="contained" onPress={() => navigation.navigate('home')}>
                    Iniciar sesion
                </Button>
             
                <Button style={styles.botonCrear} icon="login" mode="contained" onPress={() => navigation.navigate('crearCuenta')}>
                    crear cuenta
                </Button>
             
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
})