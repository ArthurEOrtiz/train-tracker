import React, { useState, useEffect} from 'react';
import { Marker } from "@react-google-maps/api";

function StationMarker() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [stopData, setStopData] = useState([]);
  const [Stations, setStations] = useState([]);

  useEffect(() =>{
    fetch(`https://data.cityofchicago.org/resource/8pix-ypme.json?`)
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })
    .then((jsonResponse) => {
      setStopData(jsonResponse)
      setIsLoaded(true)
      return jsonResponse
    })
    .then((data) => {
        setStations(
          data.reduce((stations, stop, i)=> {
            stations[stop.station_name] = {
              station_name: stop.station_name,
              map_id: stop.map_id,
              lat: +stop.location.latitude, 
              lng: +stop.location.longitude,
            }
              return stations;
          },[])
        )
    })
    .catch((error) => {
      setError(error)
      setIsLoaded(true)
    });

  },[])
  
//console.log(stopData.map(s => s)); // this returns an array of stop objects. 
// console.log(stopData); // this is an array. 
// console.log(Stations); // this is an array.

const stationKeys = Object.keys(Stations);
// const markerData = stationKeys.map(s => [s, Stations[s]]);
const markerData = stationKeys.map(s => [Stations[s].station_name, Stations[s].map_id, Stations[s].lat, Stations[s].lng]);

console.log(markerData[1]);
console.log(markerData[1][3]);




  if (error) {
    return (
      <React.Fragment>
        <h1>Error Loading Station Markers</h1>
        <p>Error: {error}</p>
      </React.Fragment>
    );
  } else if (!isLoaded) {
    return (
      <React.Fragment>
        <h1>...LOADING STATION MARKERS ON MAP...</h1>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {markerData.map((s,i) => 
        <Marker
        key={i}
        position={{lat: s[2], lng: s[3]}}
        icon={{
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}} 
        />
        )}
      </React.Fragment>
    );
  }
}

export default StationMarker;