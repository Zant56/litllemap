import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../Home/SearchBar/SearchBar';
import ButtonProfile from '../Home/ButtonProfile/ButtonProfile';
import ButtonProjects from '../Home/ButtonProjects/ButtonProjects';
import ButtonAdd from '../Home/ButtonAdd/ButtonAdd';

function App() {
  return (
    
    <div className="App">
      <SearchBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App/App.js</code> and save to reload.
        </p>
       
      </header>
      <footer>
        <ButtonProfile/>
        <ButtonProjects/>
        <ButtonAdd/>
      </footer>
    </div>
  );
}

export default App;
