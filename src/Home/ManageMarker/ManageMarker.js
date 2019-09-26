import React from 'react';
import './ButtonProjects.css';
import Marker from 'react-leaflet';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <Marker key={number.toString()}>
      {number}
    </Marker>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5,6];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);