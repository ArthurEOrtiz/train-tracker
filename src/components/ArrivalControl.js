import React, { useState, useMemo, useEffect } from 'react';
import ArrivalList from './ArrivalList';
import StationList from './StationList';
import Map from './Map';


function ArrivalControl(){

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [stations, setStations] = useState([]);
  const [selectedStations, setSelectedStations] = useState([]);
  const [arrivals, setArrivals] = useState([]);
  

   // Station API
    useMemo(()=>{
    fetch(`https://data.cityofchicago.org/resource/8pix-ypme.json?`)
    .then(response => {
      console.log(`API has been called: ${response.ok}`)
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
  }, []);

  const handleStationSelection = (id) => {

    const findDuplicateStation = selectedStations.find(({map_id}) => map_id === id); 
    
    if (findDuplicateStation === undefined) {
      const newStationSelection = selectedStations.concat(stations[id]);
      setSelectedStations(newStationSelection);
    }
  }

  // Arrival API
  useEffect(()=> {
    const mapIds =  selectedStations.reduce((acc, element)=>{
        return acc.concat(element.map_id);
      },[]);
    
    const requests = mapIds.map(id => fetch(`http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${process.env.REACT_APP_CTA_API_KEY}&mapid=${id}&outputType=JSON`));

    Promise.all(requests) 
    .then(responses => Promise.all(responses.map(r=> r.json())))
    .then(responses => responses.reduce((acc, element, i, array)=>{
      acc[i] = array[i].ctatt.eta
      return acc.flat()
    },[]))
    .then(response => setArrivals(response.map((arrival, index) =>{
      const arrTime = new Date (arrival.arrT);
      let hour = arrTime.getHours();
      let minute = arrTime.getMinutes();
      const amPm = hour >= 12 ? 'PM' : 'AM'
      hour = hour % 12
      hour = hour ? hour : 12;
      minute = minute < 10 ? '0' + minute : minute;
  
      const amPmArrTime = `${hour}:${minute} ${amPm}`
  
      return {
        line: arrival.rt,
        station: arrival.staNm,
        destination: arrival.destNm,
        arrivalTime: amPmArrTime
      }
    })));

  },[selectedStations]);

  const handleOnMouseOverStation = (mapId) => {
    return mapId;
  }

  const handleDeleteStation = (s_name) => {
    const newSelectedStations = selectedStations.filter(s => s.station_name !== s_name);
    setSelectedStations(newSelectedStations);
    console.log(s_name);
  }

  console.log(selectedStations);

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
  } else if (isLoaded) {
    return (
      <React.Fragment>
        <div className='HUD-Container'>
          <ArrivalList
          arrivals = {arrivals}
          />
          <StationList
          selectedStations = {selectedStations}
          deleteStations = {handleDeleteStation}
          />
        </div>
        <Map 
          stationList={stations}
          onStationSelection = {handleStationSelection}
          onStationHover = {handleOnMouseOverStation}
          />
      </React.Fragment>
    );
    
  }
}

export default ArrivalControl;