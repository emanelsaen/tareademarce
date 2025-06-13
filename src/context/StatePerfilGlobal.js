import { View, Text } from "react-native";
import React, { useState } from "react";
import {estadoPerfilGlobal} from "./contextData";

export default function StatePerfilGlobal({children}) {
    const [datosPerfil, setDatosPerfil]=useState();
    const [isLogin, setIsLogin]=useState(false);

    const login = () =>{
        setIsLogin(true);
    }
    const loginOut= () =>{
        setIsLogin(false);
    }
    return( 
    <estadoPerfilGlobal.Provider value={{datosPerfil,isLogin,login,loginOut}}>
        {children}
    </estadoPerfilGlobal.Provider>
    )
}