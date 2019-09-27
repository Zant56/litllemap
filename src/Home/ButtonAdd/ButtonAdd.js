import React from 'react';
import './ButtonAdd.css';
import {Button,Icon} from 'react-materialize';

class ButtonAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state=> ({
      isToggleOn: !state.isToggleOn 
    }));
  }

  senData() {
    this.props.parentCallback(this.isToggleOn)
  }

  render(){
    return (
      <div className="button2">
        <Button 
          floating 
          large 
          waves="light" 
          onClick={this.handleClick}
          icon={
            <Icon>
              add
            </Icon> 
            }
        >
          {this.state.isToggleOn ? 'On' : 'Off' }
          {this.senData}
        {console.log(this.state)}
        </Button>

      </div>
    );
  }
}

export default ButtonAdd;