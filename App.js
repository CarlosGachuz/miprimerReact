import React, { useState } from 'react';
import AgeConverter from './Componentes/AgeConverter';
import DatePicker from './Componentes/DatePicker';
import Formulario from './Componentes/Formulario';
import ContadorDeClicks from './Componentes/contador';
import PokemonSearch from './Componentes/PokemonSearch';
import RickAndMortyCharacters from './Componentes/RickAndMortyCharacters';

import './index.css';

import login from "./Componentes/firebase/login";



function App() {
  const [showDate, setShowDate] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showClic, setShowClic] = useState(false);
  const [ShowAge,  setShowAge ] = useState(false); 
  const [isPokemonModuleEnabled, setPokemonModuleEnable] = useState(false);
  const [isRickandMortyModuleEnabled, setRickandMortyModuleEnabled] =useState(false);
  const [isLoginModuleEnabled, setLoginModuleEnabled] = useState(false);


  const toggleLoginModule=() => {
    setLoginModuleEnabled(!isLoginModuleEnabled);
  };
}


  return (

    <div>
    <h1> Hola este es mi Primer react</h1>



    <div className='"button_top"> Button'>
      
      
      <button onClick={() => setShowDate(!showDate)}>
        {showDate ? 'Ocultar Fecha' : 'Mostrar Fecha'}
      </button>

      
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
      </button>

      <button onClick={() => setShowClic(!showClic)}>
        {showClic ? 'Ocultar Contador' : 'Mostrar Contador'}
      </button>

      <button onClick={() => setShowAge(!ShowAge)}> 
        {ShowAge  ? 'Ocultar Edad' : 'Mostrar Edad' }
      </button>

      


      {showClic && <ContadorDeClicks />}
      {showDate && <DatePicker />}
      {showForm && <Formulario />}
      {ShowAge  && <AgeConverter/>}
      
      
      <h1>Pokemon Search App</h1> 
   <PokemonSearch />
    </div>
    <button onClick={toggleLoginModule}>
    {isLoginModuleEnabled
    ? "Deshabilitar Modulo de Inicio de Sesion"
    : "Habilitar Modulo de Inicio de Sesion"}
    <button/>
    {isLoginModuleEnabled && <login}
   
    </div>
    
  );
};

export default App;
