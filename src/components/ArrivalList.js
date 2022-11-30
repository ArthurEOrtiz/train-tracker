import React from 'react';
import Arrival from './Arrival';
import "./ArrivalList.css";


function ArrivalList(){
    
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
        <div className="ArrivalList-Container">
          <h2>Arrival Times</h2>
          <div className="ArrivalList-Table-Container">
            <table className="ArrivalList-Table">
              <thead>
                <tr>
                  <th>Line</th>
                  <th>Station</th>
                  <th>Destination</th>
                  <th>Arrival Times</th>
                </tr>
              </thead>
              <tbody>
              {sampleStation.map((arrival, index) =>
                <Arrival 
                line={arrival.line} 
                station={arrival.station}
                destination={arrival.destination}
                arrivalTime={arrival.arrivalTime}
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


export default ArrivalList;