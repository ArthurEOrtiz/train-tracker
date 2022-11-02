import React from "react";
import Map from "./Map"
import { useLoadScript } from '@react-google-maps/api';

function MapLoader(){
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"]
  });

  if (!isLoaded) {
    return(
      <React.Fragment>
        <h1>MAP IS LOADING</h1>
      </React.Fragment>
    )
  }

  return(
    <React.Fragment>
      <Map />
    </React.Fragment>
  );
}

export default MapLoader