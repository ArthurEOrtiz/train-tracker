import React from 'react';
// import React, { useState, useEffect } from 'react';
import Station from './Station';
import "./StationList.css";


function StationList(){
    
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