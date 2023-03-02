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

  const fetchStationsData = async () => {
    try {
      const response = await fetch(`https://data.cityofchicago.org/resource/8pix-ypme.json?`);
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      const jsonResponse = await response.json();
      const stationsData = jsonResponse.reduce((stations, stop, i, array ) => {
        const stopsArray = array.filter(s => s.map_id === stop.map_id);
        const stopsObj = stopsArray.map(s => {
          return {
            stop_id: s.stop_id,
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
        });
        stations[stop.map_id] = {
          station_name: stop.station_name,
          map_id: +stop.map_id,
          lat: +stop.location.latitude,
          lng: +stop.location.longitude,
          stops : stopsObj
        }
        return stations;
      },[]);
      return stationsData;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const stationsData = await fetchStationsData();
        setStations(stationsData);
        setIsLoaded(true);
      } catch (error) {
        setError(error.message);
        setIsLoaded(true);
      }
    };
    fetchData();
  }, []);
  
  

  const handleStationSelection = (id) => {

    const findDuplicateStation = selectedStations.find(({map_id}) => map_id === id); 
    
    if (findDuplicateStation === undefined) {
      const newStationSelection = selectedStations.concat(stations[id]);
      setSelectedStations(newStationSelection);
    }
  }

  // Arrival API
  useEffect(() => {
    const mapIds = selectedStations.map(station => station.map_id);
  
    const requests = mapIds.map(id =>
      fetch(`http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${process.env.REACT_APP_CTA_API_KEY}&mapid=${id}&outputType=JSON`)
        .then(response => response.json())
    );
  
    Promise.all(requests)
      .then(responses => responses.map(response => response.ctatt.eta).flat())
      .then(etas => {
        const formattedEtas = etas.map(eta => {
          const arrTime = new Date(eta.arrT);
          const hour = arrTime.getHours() % 12 || 12;
          const minute = arrTime.getMinutes().toString().padStart(2, '0');
          const amPm = arrTime.getHours() >= 12 ? 'PM' : 'AM';
          const amPmArrTime = `${hour}:${minute} ${amPm}`;
  
          return {
            line: eta.rt,
            station: eta.staNm,
            destination: eta.destNm,
            arrivalTime: amPmArrTime
          };
        });
  
        setArrivals(formattedEtas);
      })
      .catch(error => console.error(error));
  }, [selectedStations]);
  

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