import React from "react";
import { useLoadScript } from '@react-google-maps/api';

function Map() {
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
      <h1>This is a map</h1>
    </React.Fragment>
  );
}

export default Map