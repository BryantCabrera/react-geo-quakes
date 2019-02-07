import React, { Component } from 'react';

class Quakes extends Component {
    render() {
        return(
            <div>
                {this.props.maps.map((map, index) =>
                    <p key={index}>{map.properties.title}</p>
                )}
            </div>
        )
    }
}

export default Quakes;