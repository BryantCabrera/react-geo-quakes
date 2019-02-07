import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import { GoogleApiWrapper, Marker } from 'google-maps-react';

const AnyReactComponent = ({ text }) => <img src="{text}"></img>;
// var marker = new google.maps.Marker({position: {lat: 18.1358, lng: -68.5523 }, map: Map});


 
// export class MapContainer extends Component {
    
//   render() {
//     const style = {
//         width: '50%',
//         height: '100%'
//     }
//     return (
//         {this.props.maps.map((map, index) => 
//             <Map google={this.props.google} 
//                 style={style}
//                 initialCenter={{
//                     lat: 40.854885,
//                     lng: -88.081807
//                 }}
//                 zoom={15}
//                 onClick={this.onMapClicked}>
        
//                 <Marker onClick={this.onMarkerClick}
//                         name={'Current location'} />
        
//                 <InfoWindow onClose={this.onInfoWindowClose}>
//                     <div>
//                     <h1>{this.props.maps[0].title}</h1>
//                     </div>
//                 </InfoWindow>
//             </Map>
        
//         }
      
//     );
//   }
// }
 
// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')
// })(MapContainer)

class Map extends Component {
    static defaultProps = {
        center: {
          lat: 30.2682,
          lng: -97.74295
        },
        zoom: 11
    };

    render() {
        return(
            <div style={{ height: '50rem', width: '100%' }}>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {this.props.maps.map((map, index) => 
                        <AnyReactComponent
                        lat={map.geometry.coordinates[1]}
                        lng={map.geometry.coordinates[0]}
                        text={'../public/images/earthquake.png'}
                        />
                    )}
                    
                    
                </GoogleMapReact>

            </div>
        )
    }
}


// const Marker = {
//     render () {

//         return (
//             <div>
//                 <Map google={this.props.google}
//                     style={{width: '100%', height: '100%', position: 'relative'}}
//                     className={'map'}
//                     zoom={14}>
//                 <Marker
//                     title={'The marker`s title will appear as a tooltip.'}
//                     name={'SOMA'}
//                     position={{lat: 30.2682, lng: -97.74295}} />
//                 {/* <Marker
//                     name={'Dolores park'}
//                     position={{lat: 37.759703, lng: -122.428093}} />
//                 <Marker />
//                 <Marker
//                     name={'Your position'}
//                     position={{lat: 37.762391, lng: -122.439192}}
//                     icon={{
//                     url: "/path/to/custom_icon.png",
//                     anchor: new google.maps.Point(32,32),
//                     scaledSize: new google.maps.Size(64,64)
//                     }} /> */}
//                 </Map>
//             </div>
//         )
        
//     }
// }

export default Map;