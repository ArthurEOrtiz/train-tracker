import React from "react";
import { useMemo } from "react";
import "./Map.css";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const libraries = ["places"]; // 1/2 this might go into stations later
const mapContainerStyle = "map-container";
const center =  {
  lat: 41.8786, 
  lng: -87.6251
}; 

function Map(){

  const{ isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries// 2/2 this might go into stations later
  });

  const options = useMemo(()=> ({
    disableDefaultUI: true,
    clickableIcons: false,
    zoomControl: true,
  }), []);

  
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
        center={center}
        mapContainerClassName={mapContainerStyle}
        options={options}
      />
    </React.Fragment>
    );
}

export default Map;