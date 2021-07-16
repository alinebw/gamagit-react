import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App(props) {
  const [ usuario, setUsuario ] = useState('Guilherme')
  return (
    <> 
      <p>{ usuario }</p>
      <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuário" />
    </>
  );
}




export default App;
