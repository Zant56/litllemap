import React from 'react';
import './ButtonProjects.css';
import Marker from 'react-leaflet';

function ShowMarqueurs(props) {
  const marqueurs = this.state.marqueur;
  const listmarqueurs = marqueurs.map((marker) =>
  <Marker>{marker}</Marker>
  );  
  return (
    <Marker>{listmarqueurs}</Marker>
  );
 }

function ShowMarqueurs(props) {
  const marqueurs = props.marqueurs;
  const listmarqueurs = marqueurs.map((marker) =>
    <Marker> {marker} </Marker>
  );
  return (
    <Marker>{listmarqueurs}</Marker>
  );
}

const marqueurs = props.marqueurs;
ReactDOM.render(
  <ShowMarqueurs marqueurs={marqueurs} />,
  document.getElementById('root')
);