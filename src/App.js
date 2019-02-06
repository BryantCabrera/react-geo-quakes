import React, { Component } from 'react';

class App extends Component {

  getMaps = async () => {
    try {
      const maps = await fetch('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');

      // if(!this.getMaps.ok) {
      //   throw Error(maps.statusText);
      // }

      const mapsParsedJson = await maps.json();
      console.log(mapsParsedJson);
      mapsParsedJson.features.map((map, index) => console.log(index, map));

      // mapsParsedJson.map(map => console.log(map));
    } catch (err) {
      console.log(err, 'error in catch block');    
    }
  }

  componentDidMount() {
    this.getMaps();
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here...
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          ...put Quakes Component here...
        </div>
      </div>
    );
  }
}

export default App;
