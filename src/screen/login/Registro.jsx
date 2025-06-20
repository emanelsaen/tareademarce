const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [nombre, setNombre] = React.useState('');
    const [status, setStatus] = React.useState('activo');
    const navigation = useNavigation();

    const onCrearCuenta = async () => {
    if (!email || !password || !nombre) {
        Alert.alert('Error', 'Completa todos los campos.');
        return;
    }
    const nuevoUsuario = {
        nombre: nombre,
        email: email,
        pw: password,
        status: status
    };
    try {
        const response = await fetch('http://192.168.0.8:4000/api/usuario/agregar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoUsuario)
        });
        const result = await response.json();
        if (result.body && result.body.status) {
            Alert.alert('Éxito', 'Cuenta creada correctamente.', [
                { text: 'OK', onPress: () => navigation.navigate('login') }
            ]);
            
        } else {
            Alert.alert('Error', result.body?.mensaje || 'No se pudo crear la cuenta.');
        }
    } catch (error) {
        Alert.alert('Error', 'No se pudo conectar con el servidor.');
        console.error(error);
    }
};   