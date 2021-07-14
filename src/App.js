import { useState } from 'react';
import './App.css';

function App(props) {
  const [cep, setCep] = useState({})

  function handleTextChange(e) {
    fetch(`https://viacep.com.br/ws/${e.target.value}/json/`)
    .then(res => res.json())
    .then(res => setCep(res))
  }

  return (
    <div>
      <strong>Olá, {props.name}</strong>
      <div>
        Digite o cep: <input type="text" onChange={handleTextChange}/>
        {Object.entries(cep).map((values, keys) => (
          <h2 key={keys}><strong>{values[0]}</strong>{values[1]}</h2>
        ))}
      </div>
    </div>
    )
  }

export default App;
