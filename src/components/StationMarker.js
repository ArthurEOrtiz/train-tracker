import React from "react";
import { MarkerF } from "@react-google-maps/api";

function StationMarker(props) {

  console.log(`Markers are being rendered`);
  return (
    <React.Fragment>
      <MarkerF 
        key = {props.map_id}
        position = {{lat: props.lat, lng: props.lng}}
        icon={{
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}} 
      />
    </React.Fragment>
  );

}

export default StationMarker;