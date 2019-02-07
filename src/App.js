import React, { Component } from 'react';
import Quakes from './Quakes'
import Map from './Map'
// import MapContainer from './Map'

class App extends Component {
  constructor () {
    super();

    this.state = {
      maps: [],
      loading: true
    }
  }

  getMaps = async () => {
    try {
      const maps = await fetch('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');

      console.log(maps, ' this is maps');

      if(!maps.ok) {
        throw Error(maps.statusText);
      }

      const mapsParsedJson = await maps.json();
      console.log(mapsParsedJson);
      mapsParsedJson.features.map((map, index) => console.log(index, map));

      //Rendering Data
      // What is the structure of the data? metadata, features
      // How many earthquakes does it list? 2
      // How would you grab the first earthquake? mapsParsedJson.features[0]
      // How would you grab its title? mapsParsedJson.features[0].properties.title
      // How would you grab its geological coordinates:
      // latitude? mapsParsedJson.features[0].geometry.coordinates[1]
      // longitude? mapsParsedJson.features[0].geometry.coordinates[0]
      // When did it happen? mapsParsedJson.features[0].properties.time
      // How many hours ago is that? Math.abs(Date() - mapsParsedJson.features[0].properties.time) / 36e5;

      this.setState({
        maps: mapsParsedJson.features,
        loading: false
      });
      console.log(this.state.maps, "this is this.state.maps")
    } catch (err) {
      console.log(err, 'error in catch block');    
    }
  }

  componentDidMount() {
    this.getMaps();
  }

  render() {
    console.log(this.state.maps);
    return (
      <div className="app">
        <div className="mapContainer">
          <Map maps={this.state.maps} />
        </div>
        <div className="quakeContainer" id="info">
          <h1>Earthquakes from the past week: </h1>
          <Quakes maps={this.state.maps} />
        </div>
      </div>
    );
  }
}

export default App;
