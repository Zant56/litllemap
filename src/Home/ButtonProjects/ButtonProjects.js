import React from 'react';
import './ButtonProjects.css';
import { Icon} from 'react-materialize';

class ButtonProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  render() {
  return (
    <div className="button3">
          <Icon >
            {
              'filter_' + this.props.counter
            }
          </Icon> 
    </div>
  );
}}

export default ButtonProjects;