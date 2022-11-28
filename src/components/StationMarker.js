import React, { useState, useEffect} from 'react';
// import { Marker } from "@react-google-maps/api";

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


  // const groupByStation = Stations.reduce((stations, stop)=>{
  //   const key = stop["map_id"];
  //   const curGroup = stations[key] ?? [];


  //   return { ...stations, [key]: [...curGroup, stop]};
  // },{});

  const groupByStation = Stations.reduce((stations, stop, i, array )=>{
    let stopsArray = [];

    stations[stop.map_id] = {
              station_name: stop.station_name,
              map_id: stop.map_id,
              lat: +stop.location.latitude, 
              lng: +stop.location.longitude,
              stops: +stopsArray.push(stop.stop_id)
            }
              return stations;
  },{});


console.log(groupByStation);

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
        {/* {markerData.map((s,i) => 
        <Marker
        key={i}
        position={{lat: s[2], lng: s[3]}}
        icon={{
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}} 
        onClick = {() => console.log(s[1])}
        />
        )} */}
      </React.Fragment>
    );
  }
}

export default StationMarker;