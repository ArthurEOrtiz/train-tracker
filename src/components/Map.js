import React from "react";
import {useState, useMemo, useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";


function Map(){

  const center = useMemo(() => ({lat: 42, lng: 88 }), []);

  return (
    <React.Fragment>
      <div className="mapContainer">
        <div className="controls">
          <h1>Controls</h1>
        </div>
        <div className="map">
          <GoogleMap zoom={10} center={center} ></GoogleMap>
        </div>
      </div>
    </React.Fragment>
    );
}

export default Map