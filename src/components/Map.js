import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const libraries = ["palces"]; // 1/2 this might go into stations later
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

function Map(){

  const{ isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries// 2/2 this might go into stations later
  });

  if (loadError) {
    return(
    <React.Fragment>
      <h1>Error Loading Maps</h1>;
    </React.Fragment>
    )
  }
  
  if (!isLoaded) {
    return(
      <React.Fragment>
        <h1>MAP IS LOADINNNGG</h1>
      </React.Fragment>
    )
  }

    return ( 
    <React.Fragment>  
      <GoogleMap
        zoom={12} 
        center={{lat: 41.8786, lng: -87.6251}}
        mapContainerStyle={mapContainerStyle}
      />
    </React.Fragment>
    );
}

export default Map;