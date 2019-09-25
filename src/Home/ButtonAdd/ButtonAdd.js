import React from 'react';
import './ButtonAdd.css';
import {Button,Icon} from 'react-materialize';

function ButtonAdd() {
  return (
    <div className="button2">
      <Button 
        floating 
        large 
        waves="light" 
        icon={
          <Icon>
            add
          </Icon> 
          }
      />
    </div>
  );
}

export default ButtonAdd;