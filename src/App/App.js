import React from 'react';
import './App.css';
import SearchBar from '../Home/SearchBar/SearchBar';
import ButtonProfile from '../Home/ButtonProfile/ButtonProfile';
import ButtonProjects from '../Home/ButtonProjects/ButtonProjects';
import ButtonAdd from '../Home/ButtonAdd/ButtonAdd';
import MainMap from '../Home/MainMap/MainMap';

function App() {
  return (
    
    <div className="App">

      <header className="App-header">
        <SearchBar/>
      </header>

      <section className="App-body">
        <MainMap/>
      </section>

      <section className="App-buttons">
        <ButtonProfile/>
        <ButtonProjects/>
        <ButtonAdd/>
      </section>

    </div>
  );
}

export default App;
