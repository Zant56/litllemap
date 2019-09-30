import React from 'react';
import './App.css';
import ButtonProfile from '../Home/ButtonProfile/ButtonProfile';
import ButtonProjects from '../Home/ButtonProjects/ButtonProjects';
import ButtonAdd from '../Home/ButtonAdd/ButtonAdd';
import MainMap from '../Home/MainMap/MainMap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);    
    this.state = {           
    isToggleOn: false
    }
  }

  handleData(data) {
    this.setState({
      isToggleOn: data
    });
    console.log(this.isToggleOn)
  }

  render() {
    return ( 
      <div className="App">
  
        <header className="App-header">
        </header>
  
        <section className="App-body">
          <MainMap 
            isToggleOn = {this.state.isToggleOn}
          />
        </section>
  
        <section className="App-buttons">
          <ButtonProfile/>
          <ButtonProjects/>
          <ButtonAdd 
            handleFromParent={this.handleData}
          >
                    {console.log(this.state.isToggleOn)}

            </ButtonAdd>
        </section>
  
      </div>
    );
  }
  }
  

export default App;
