import React from "react";
import Map from "./Map"
import { useLoadScript } from '@react-google-maps/api';

function MapLoader(){
  const libraries = ["places"];

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) {
    return(
      <React.Fragment>
        <h1>There has been an error loading the map.</h1>
      </React.Fragment>
    )
  }

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