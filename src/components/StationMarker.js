import React from "react";
import { Marker } from "@react-google-maps/api";

function StationMarker(props) {

  return (
    <React.Fragment>
      <Marker 
        key = {props.map_id}
        position = {{lat: props.lat, lng: props.lng}}
        icon={{
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}} 
      />
    </React.Fragment>
  );

}

export default StationMarker;