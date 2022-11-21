import React, { useState, useEffect} from 'react';

function StationMarker() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [stationData, setStationData] = useState([]);

  useEffect(() =>{
    fetch(`https://data.cityofchicago.org/resource/8pix-ypme.json?blue=true`)
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })
    .then((jsonResponse) => {
      setStationData(jsonResponse)
      setIsLoaded(true)
    })
    .catch((error) => {
      setError(error)
      setIsLoaded(true)
    });
  },[])

  return (
    <React.Fragment>
    <h1>STATION DATA</h1>
    <ul>
      {stationData.map((station, index) =>
        <li key={index}>
          <p>{station.station_name}</p>
        </li>
      )}
    </ul>
    </React.Fragment>
  );
}

export default StationMarker;