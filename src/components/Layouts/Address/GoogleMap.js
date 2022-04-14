import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  render() {
    return (
      <div className=" w-[24rem] h-[18rem] sm:w-[30rem] sm:h-[20rem] md:w-[33rem] md:h-[22rem] lg:w-[44rem] lg:h-[26rem] xl:w-[56rem] xl:h-[30rem]">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAD6gAVlWdIr1qBPCXLfHg0_pWVm2uh_PA " }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
