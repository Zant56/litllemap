import React from 'react';
import './ButtonAdd.css';
import {Button,Icon} from 'react-materialize';

class ButtonAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.setState(state=> ({
      isToggleOn: !state.isToggleOn 
    }));
    evt.preventDefault();
    this.props.handleFromParent(this.state.isToggleOn);
    console.log(this.props.handleFromParent(this.state.isToggleOn))
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
        </Button>

      </div>
    );
  }
}

export default ButtonAdd;