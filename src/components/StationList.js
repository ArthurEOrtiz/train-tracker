// import React from 'react';
// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
import Station from './Station';
// import stops  from './../txt/stops.txt';
import "./StationList.css";


function StationList(){

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [rawData, setRawData] = useState();
    
    // fetch(`https://www.transitchicago.com/downloads/sch_data/CTA_STOP_XFERS.txt`)
    //   .then(response => response.text()) 
    //   .then(t => {
    //     console.log(t);
    //   });


    // useEffect(() => {
    //   fetch(`https://www.transitchicago.com/downloads/sch_data/CTA_STOP_XFERS.txt`)
    //   .then(response => response.text())
    //   .then(t => {
    //     const stationArray = t.split('\n');
    //     console.log(stationArray[0] + '\n'+ stationArray[1]);
    //   })
    // },[]);

    
  const sampleStation = [
    {
      line: 'Blue' ,
      station: 'Rosemont',
      destination: 'O\'hare',
      arrivalTime: '12:35 pm',
    },
    {
      line: 'Red',
      station: 'Jackson',
      destination: 'Howard',
      arrivalTime: '12:42 pm',
    },
    {
      line: 'Pink',
      station: '18th',
      destination: '54th/Cermak',
      arrivalTime: '12:52 pm',
    },
    {
      line: 'Pink',
      station: 'Morgan',
      destination: 'Loop\'L\'',
      arrivalTime: 'Delayed',
    }
  ];


  return (
    <React.Fragment>
      <div className="StationList-Container">
        <h2>Arrival Times</h2>
        <div className="StationList-Table-Container">
          <table className="StationList-Table">
            <thead>
              <tr>
                <th>Line</th>
                <th>Station</th>
                <th>Destination</th>
                <th>Arrival Times</th>
              </tr>
            </thead>
            <tbody>
            {sampleStation.map((station, index) =>
              <Station 
              line={station.line} 
              station={station.station}
              destination={station.destination}
              arrivalTime={station.arrivalTime}
              key={index}
              />
            )}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}


export default StationList;