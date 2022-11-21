import React, { useState, useEffect} from 'react';
// import { Marker } from "@react-google-maps/api";

function StationMarker() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [stationData, setStationData] = useState([]);
  // const [blueLineStation, setBlueLineStations] = useState([]);

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
      setStationData(jsonResponse)
      // setBlueLineStations(jsonResponse.filter(b => b.blue === true))
      setIsLoaded(true)
      // console.log(blueLineStation)
    })
    .catch((error) => {
      setError(error)
      setIsLoaded(true)
    });
  },[])

  // const blueLineStops = stationData.filter(b => b.blue === true);


  const uniqueMapIds = stationData.reduce((idTally, stops) => {
    idTally[stops.map_id] = (idTally[stops.map_id] || 0) +1;
    return idTally;
  }, {});

  console.log(uniqueMapIds);

  
    
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
        {/* <Marker 
        key={index}
        position={{lat: +station.location.latitude, lng: +station.location.longitude}}
        icon={{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}} 
        />  */}
      </React.Fragment>
    );
  }
}


export default StationMarker;