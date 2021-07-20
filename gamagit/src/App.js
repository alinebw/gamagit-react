import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App(props) {
  const [ user, setUser ] = useState ('');
  function handleSearch() {
    console.log(user);
  }
  return (
    
    <> 
    <p>{ user }</p>
      <input className="userInput" placeholder="Usuário" value={user} onChange={e => setUser(e.target.value)} />
      <button type="button" onClick={handleSearch}>Pesquisar</button>
    </>
  );
}




export default App;
