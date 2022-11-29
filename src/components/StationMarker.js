import React, { useState, useEffect} from 'react';
import { Marker } from "@react-google-maps/api";

function StationMarker() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
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
    .then((response) => {
        setStations(
          response
          // response.reduce((stations, stop)=> {
          //   stations[stop.station_name] = {
          //     station_name: stop.station_name,
          //     map_id: stop.map_id,
          //     lat: +stop.location.latitude, 
          //     lng: +stop.location.longitude,
          //   }
          //     return stations;
          // },{})
        )
    })
    .catch((error) => {
      setError(error)
      setIsLoaded(true)
    });
  },[])
  

// const stationKeys = Object.keys(Stations);
// const markerData = stationKeys.map(s => [Stations[s].station_name, Stations[s].map_id, Stations[s].lat, Stations[s].lng]);


  const groupByStation = Stations.reduce((stations, stop, i, array )=>{
    const stopsArray = array.filter(s => s.map_id === stop.map_id);
    const stopsObj = stopsArray.map(s => {
      return {  stop_id: s.stop_id,
                stop_name: s.stop_name,
                ada: s.ada,
                red: s.red,
                blue: s.blue,
                green: s.g,
                brown: s.brn,
                purple: s.p,
                purple_express: s.pexp,
                yello: s.y,
                pink: s.pnk,
                orange: s.o
              }
      }
    );
    stations[stop.map_id] = {
              station_name: stop.station_name,
              map_id: +stop.map_id,
              lat: +stop.location.latitude, 
              lng: +stop.location.longitude,
              stops : stopsObj
            }
              return stations;
  },[]);

  // console.log(groupByStation);

  const objTest = groupByStation.map((s,i) => [ s.map_id , s.lat, s.lng, s.station_name ]);

  console.log(objTest);


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
        {groupByStation.map((s) => 
        <Marker
        key={s.map_id}
        position={{lat: s.lat, lng: s.lng}}
        icon={{
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}} 
        onClick = {() => console.log(s.station_name)}
        />
        )}
      </React.Fragment>
    );
  }
}

export default StationMarker;