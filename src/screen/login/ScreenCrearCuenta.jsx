import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default function ScreenCrearCuenta() {
    const [text, setText] = React.useState("");
    const [text1, setText1] = React.useState("");
    const [text2, setText2] = React.useState("");
    const [email, setEmail] = React.useState("");
    const navigation = useNavigation();
    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 30, marginTop: 50, marginButton:80  }}>Crear cuenta</Text>
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
                    label="Nombre de usuario"
                    value={text}
                    onChangeText={text => setText(text)
                    }
                />
                <TextInput
                    style={styles.input}
                    label="Contraseña"
                    value={text1}
                    onChangeText={text1 => setText1(text1)
                    }
                />
                <TextInput
                    style={styles.input}
                    label="Confirmar Contraseña"
                    value={text2}
                    onChangeText={text2 => setText2(text2)
                    }
                />
                <Button style={styles.boton} icon="login" mode="contained" onPress={() => navigation.navigate('home')}>
                    Crear cuenta
                </Button>
                <Button style={styles.botonCrear} icon="" mode="text" onPress={() => navigation.navigate('login')}>
                    Volver al login
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
        marginBottom: 20,
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
       
        justifyContent: 'center',
        alignItems: 'center',
    },
})