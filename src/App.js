import React from 'react';
import logo from './logo.svg';
import Container from './Containers/container';
import './App.css';

function App() {
  return (
    <div className="App">
        
      <header className="App-header">
        <Container/>
        <p>
          Click "Reload Colors" to change the colors
        </p>  
      </header>
    </div>
  );
}

export default App;
