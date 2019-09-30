import React, {Component}  from "react";
import {Map, TileLayer, Popup, Marker} from "react-leaflet";
import GeoSearch from '../SearchBar/SearchBar';

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
      marqueur: [[51.3,-1.01]],
      counter: 0
    };
     this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.markerCounter();
  }

  handleClick(e){
    this.setState({ currentPos: e.latlng });
    this.state.marqueur.push(e.latlng)
    this.setState(this.state.marqueur)
    console.log(this.state.marqueur)
  }
  
  addMarker = (e) => {
    const addMarkerOn = this.props.isToggleOn;
    if (addMarkerOn) {
      const {marqueur} = this.state
      console.log({marqueur});
      marqueur.push(e.latlng);
      this.setState({marqueur});
    }
    this.markerCounter();
    console.log(this.props.isToggleOn)
  }

  markerCounter = () => {
    this.setState({counter: 0});
    console.log('on move end');
    const mapBounds = this.refs.L.leafletElement.getBounds();
    this.state.marqueur.forEach(element => {
      if (mapBounds.contains(element)) {
         this.setState({counter: this.state.counter+1});
         console.log(this.state.counter);
         this.props.handleCounterFromMap(this.state.counter);
      }  
    })
  }

  render() {
    return (
      <div>
        <Map 
        zoom={8} 
        center={{ lat: 51.5287718, lng: -0.2416804 }} 
        onClick={this.addMarker}
        onMoveend={this.markerCounter}
        ref='L'
        >
          <TileLayer
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          { this.state.currentPos && 
            <MyMarker position={this.state.currentPos}>
              <Popup position={this.state.currentPos}>
                Current location: <pre>{JSON.stringify(this.state.currentPos, null, 2)}</pre>
              </Popup>
            </MyMarker>
          }
          { 
            this.state.marqueur.map((position, idx) => 
              <Marker 
                key={`marker-${idx}`} 
                position={position}>
              <Popup>
                <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
              </Popup>
            </Marker>
          )}
          <GeoSearch/>
         </Map>
      </div>
    )
  }
}

export default MainMap;