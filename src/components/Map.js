import React from "react";
import {useState, useMemo, useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
} from "@react-google-maps/api";


function Map(){

  const center = useMemo(() => ({lat: 41.87, lng: -87.62 }),[]);

  const mapStyling = "map-container";

  // const howard = {lat: 41.903, lng: -87.636}


  const option = useMemo(()=> ({
    mapId: "23452f45ef043bfc",
    disableDefaultUI: true,
    clickableIcons: false
  }), []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="controls">
          <h1>Controls</h1>
        </div>
        <div className="map">
          <GoogleMap 
            zoom={11} 
            center={center} 
            mapContainerClassName = {mapStyling}
            options={option}
            onClick={(event)=>{
              console.log(event);
            }}
            >
              <Marker 
              position={{lat: 41.903, lng: -87.636}} />
            </GoogleMap>
        </div>
      </div>
    </React.Fragment>
    );
}

export default Map