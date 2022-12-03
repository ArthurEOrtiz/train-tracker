// import React from 'react';
import React, { useState, useEffect} from 'react';
import ArrivalList from './ArrivalList';
import Map from './Map';

function ArrivalControl(){

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [stations, setStations] = useState([]);

   // Chicago Station API

  useEffect(() =>{
    fetch(`https://data.cityofchicago.org/resource/8pix-ypme.json?`)
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json();
      }
    })
    .then((jsonResponse) => {
        setStations(
          jsonResponse.reduce((stations, stop, i, array )=>{
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
          },[])
        )
        setIsLoaded(true)
    })
    .catch((error) => {
      setError(error.message);
      setIsLoaded(true);
    });
  },[])
  
 


  return (
    <React.Fragment>
      <ArrivalList />
      <Map 
        stationList={stations}
        />
    </React.Fragment>
  );
}

export default ArrivalControl;