import React, {Component}  from "react";
import {Map, TileLayer, Popup, Marker} from "react-leaflet";

const MyMarker = props => {

  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }
  return <Marker ref={initMarker} {...props}/>
}

class MainMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: null,
      marqueur: [[51.3,-1.01]]
    };
     this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.setState({ currentPos: e.latlng });
    this.state.marqueur.push(e.latlng)
    this.setState(this.state.marqueur)
    console.log(this.state.marqueur)
  }
  
  addMarker = (e) => {
    const {marqueur} = this.state
    console.log({marqueur})
    marqueur.push(e.latlng)
    this.setState({marqueur})
  }

  render() {

    return (
      <div>
        <Map 
        zoom={8} 
        center={{ lat: 51.5287718, lng: -0.2416804 }} 
        onClick={this.addMarker}>
          <TileLayer
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          { this.state.currentPos && <MyMarker position={this.state.currentPos}>
            <Popup position={this.state.currentPos}>
              Current location: <pre>{JSON.stringify(this.state.currentPos, null, 2)}</pre>
            </Popup>
          </MyMarker>}
          {this.state.marqueur.map((position, idx) => 
          <Marker key={`marker-${idx}`} position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
        )}
         </Map>
      </div>
    )
  }
}

export default MainMap;