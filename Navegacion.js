import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

//llamar nuestro screen padre
import ScreenHome from "./screen/home/ScreenHome";
import ScreenAbout from "./screen/about/ScreenAbout";  
import ScreenSetting from "./screen/setting/ScreenSetting";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//Lamar a nuestros hijosHome 
import HomeDetalles from "./screen/home/HomeDetalles";
import LucesCasa from "./screen/home/LucesCasa";
import PuertasCasa from "./screen/home/PuertasCasa";

//Llamar a nuestros screen de login
import ScreenLogin from "./screen/login/ScreenLogin";
import ScreenCrearCuenta from "./screen/login/ScreenCrearCuenta";

//import de las dependencias de react-navigation
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStackHome() {
    const privilegio = 'user';
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="menu"
                component={ScreenHome}
                options={{ title: 'Menu',
                    headerShown: true, // Mostrar el encabezado de la pantalla
                }}
            />
            
            <Stack.Screen
                name="detalles"
                component={HomeDetalles}
                options={{ title: 'Detalles',
                    headerShown: true, // Mostrar el encabezado de la pantalla
                }}
            />
            <Stack.Screen
                name='luces'
                component={LucesCasa}
            />
            <Stack.Screen
                name = "puertas"
                component={PuertasCasa}
            />
        </Stack.Navigator>
    );
}
function MystackLogin(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="login"
                component={ScreenLogin}
                options={{ title: 'Login',
                    headerShown: true, // Mostrar el encabezado de la pantalla
                }}
            />
            <Stack.Screen
                name="crearCuenta"
                component={ScreenCrearCuenta}
                options={{ title: 'Crear Cuenta',
                    headerShown: true, // Mostrar el encabezado de la pantalla
                }}
            />
        </Stack.Navigator>
    );
}
// Crear una función que contenga las pestañas
function Mytabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="home"
            component={MyStackHome} 
            options={{title: 'Inicio',
                headerShown: false, // Ocultar el encabezado de la pantalla
                tabBarLabelPosition: 'beside-icon', // Etiqueta al lado del icono
                tabBarBadge:8, // Número de notificaciones
                tabBarBadgeStyle: { backgroundColor: 'red' }, // Estilo de la insignia
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="home" color={color} size={size} />
                ),
            }}
            />
            <Tab.Screen
            name="about"
            component={ScreenAbout}
            options={{title: 'Acerca de',
                headerShown: true, // Ocultar el encabezado de la pantalla
                tabBarLabelPosition: 'beside-icon', // Etiqueta al lado del icono
                tabBarBadge:8, // Número de notificaciones
                tabBarBadgeStyle: { backgroundColor: 'red' }, // Estilo de la insignia
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="info-circle" color={color} size={size} />
                ),
            }}
            />
            <Tab.Screen
            name="setting"
            component={ScreenSetting}
            options={{title: 'Config',
                headerShown: true, // Ocultar el encabezado de la pantalla
                tabBarLabelPosition: 'beside-icon', // Etiqueta al lado del icono
                tabBarBadge:8, // Número de notificaciones
                tabBarBadgeStyle: { backgroundColor: 'red' }, // Estilo de la insignia
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="cogs" color={color} size={size} />
                ),
            }}
            />
        </Tab.Navigator>
    );
}

export default function Navegacion() {
    const user = true; // Simulación de un usuario autenticado
    return (
       //<Mytabs/>
       <MystackLogin/>
    );
}