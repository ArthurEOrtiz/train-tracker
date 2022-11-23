import React, { useState, useEffect} from 'react';
// import { Marker } from "@react-google-maps/api";

function StationMarker() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [stopData, setStopData] = useState([]);
  const [stationsByMapId, setStationsByMapId] = useState([]);

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
        setStationsByMapId(
          data.reduce((stations, stops, i) =>{
              stations[stops.station_name] = data.filter(s => (s.map_id.includes(stops.map_id)));
              return stations;
            },{})
        )
    })
    .catch((error) => {
      setError(error)
      setIsLoaded(true)
    });

  },[])

  console.log(stationsByMapId);

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
      </React.Fragment>
    );
  }
}

export default StationMarker;