import React from "react";
import { useMemo } from "react";
import "./Map.css";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import StationMarker from "./StationMarker";

const libraries = ["places"]; // 1/2 this might go into stations later
const mapContainerStyle = "map-container";
const center =  {
  lat: 41.8786, 
  lng: -87.6251
}; 

function Map(props){

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

  if (isLoaded) {
    console.log(`Map is being rendered`);
    return ( 
      <React.Fragment>  
        <GoogleMap
          zoom={10} 
          center={center}
          mapContainerClassName={mapContainerStyle}
          options={options}
        >
        {props.stationList.map((s) => 
          <StationMarker
          key = {s.map_id}
          lat = {s.lat}
          lng = {s.lng}
          />
        )}
        {/* <StationMarker 
          key={2}
          lat = {41.870851}
          lng = {-87.776812}
        /> */}
        {/* <MarkerF 
          key= {3}
          position ={{lat: 41.870851, lng: -87.776812}}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}}
        /> */}
        </GoogleMap>
      </React.Fragment>
      );
  }
}



export default Map;