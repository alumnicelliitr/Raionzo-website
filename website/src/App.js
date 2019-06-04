import React from 'react';
import NavBar from './components/NavBar.js';
import './App.css';
import MainContainer from './components/maincontainer.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContainer/>
    </div>
  );
}

export default App;