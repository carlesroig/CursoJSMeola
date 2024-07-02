import './App.css';
import React from 'react';

function App() {
  let [contador,setearConteo]= React.useState(0);
  function aumentar(){
    setearConteo(contador+1);
  }
  return (
    <div className="App">
      <h1>Contador: {contador}</h1>
      <button onClick={aumentar}>Incrementar</button>
    </div>
  );
}

export default App;
