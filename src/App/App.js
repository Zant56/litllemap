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

      <header className="App-header">
        <SearchBar/>
      </header>

      <section className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
      </section>

      <footer className="App-footer">
          <ButtonProfile/>
          <ButtonProjects/>
          <ButtonAdd/>
      </footer>

    </div>
  );
}

export default App;
