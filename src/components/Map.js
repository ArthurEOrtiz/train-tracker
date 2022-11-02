import React from "react";
import {useState, useMemo, useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";

const center = { lat: 41.85, lng: -87.65 };

function Map(){

  

  return (
    <React.Fragment>
      <div className="container">
        <div className="controls">
          <h1>Controls</h1>
        </div>
        <div className="map">
          <GoogleMap zoom={10} center={{lat: 42, lng: 88}} mapContainerClassName="map-container"></GoogleMap>
        </div>
      </div>
    </React.Fragment>
    );
}

export default Map