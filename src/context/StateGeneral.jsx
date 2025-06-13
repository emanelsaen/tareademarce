import React, { useState } from 'react';
import { counterContext } from './contextData';
import { contadorGeneral } from './contextData';


export default function StateGeneral({children}) {
const [contador, setContador] = useState(0);

const sumar = () => {
    setContador(contador+1);
}
const restar = () => {
    setContador(contador-1);
}

  return (
    <contadorGeneral.Provider value={{contador, sumar, restar}}>
        {children}
    </contadorGeneral.Provider>
  )
}