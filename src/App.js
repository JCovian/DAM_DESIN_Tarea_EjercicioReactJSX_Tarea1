import './App.css';
import React from 'react';
import Saludo from './Saludo';
import Despedida from './Despedida';

function App() {
  const mostrarSaludo = true; // Cambia a false para mostrar el mensaje de despedida
  const nombreUsuario = 'Jose';

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {mostrarSaludo ? <Saludo nombre={nombreUsuario} /> : <Despedida nombre={nombreUsuario} />}
      </div>
      </header>
    </div>
  );
}

export default App;