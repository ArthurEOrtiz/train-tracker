import React from "react";
import { MarkerF } from "@react-google-maps/api";
import PropTypes from 'prop-types';

function StationMarker(props) {
  // console.log("Stations are rendered")
  return (
    <React.Fragment>
      {/* {console.log(`StationMarker has rendered`)} */}
      <MarkerF 
        key = {props.mapId}
        position = {{lat: props.lat, lng: props.lng}}
        icon={{
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}} 
        onClick={() => props.whenStationClicked(props.mapId)}
      />
    </React.Fragment>
  );

}

StationMarker.propTypes = {
  mapId: PropTypes.number,
  lat: PropTypes.number,
  lng: PropTypes.number,
  whenStationClicked: PropTypes.func
  }

export default StationMarker;