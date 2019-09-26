import React, { Component } from "react";
import {Map, TileLayer, Popup, Marker, withLeaflet} from "react-leaflet";


const MyMarker = props => {

  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }

  return <Marker ref={initMarker} {...props}/>
}

/*
{this.state.marqueur.map(() =>
  <Marker key={`marqueur-${idx}`} marqueur={this.state.marqueur}>
  <Popup>
    <span>Popup</span>
  </Popup>
</Marker>
)}
*/



class MainMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: null,
      marqueur: [0,0]
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e){
    this.setState({ currentPos: e.latlng });
    this.state.marqueur.push(e.latlng)
    this.setState(this.state.marqueur)
    console.log(this.state.marqueur)
  }


   ShowMarqueurs(props) {
    const listmarqueurs = this.state.marqueur.map((marker) =>
    <Marker key={marker.toString()}>{marker}</Marker>
    );  
    return (
      <Marker>{listmarqueurs}</Marker>
    );
   }
  
  
  render() {
    const data = this.state.marqueur
    console.log(data)
    const listItems = data.map((d) => <Marker key={d} position={d}>{d}</Marker>)
    return (
      <div>
        <Map zoom={8} center={{ lat: 51.5287718, lng: -0.2416804 }} onClick={this.handleClick}>
          <TileLayer
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          { this.state.currentPos && <MyMarker position={this.state.currentPos}>
            <Popup position={this.state.currentPos}>
              Current location: <pre>{JSON.stringify(this.state.currentPos, null, 2)}</pre>
            </Popup>
          </MyMarker>}
         <Marker position={listItems}></Marker>
        </Map>
      </div>
    )
  }
}

export default MainMap;