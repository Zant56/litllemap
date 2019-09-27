import React from 'react';
import './App.css';
import SearchBar from '../Home/SearchBar/SearchBar';
import ButtonProfile from '../Home/ButtonProfile/ButtonProfile';
import ButtonProjects from '../Home/ButtonProjects/ButtonProjects';
import ButtonAdd from '../Home/ButtonAdd/ButtonAdd';
import MainMap from '../Home/MainMap/MainMap';

class App extends React.Component {
  constructor(props) {
    super(props)    
    this.state = {           
    isToggleOn: false
    }
  }

  callBackFunction(childData) {
    this.setState({isToggleOn: childData})
  }

  render() {
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
          <ButtonAdd parentCallback = {this.callbackFunction}>
            {console.log(this.state)}
          </ButtonAdd>
        </section>
  
      </div>
    );
  }
  }
  

export default App;
