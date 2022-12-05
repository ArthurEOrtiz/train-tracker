import React, { useState, useEffect } from 'react';
import Arrival from './Arrival';
import "./ArrivalList.css";
// import PropTypes from 'prop-types';


function ArrivalList(props){
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    fetch(`http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${process.env.REACT_APP_CTA_API_KEY}mapid=40830&outputType=JSON`
    )
      .then(response => response.json())
      .then((jsonifiedResponse) => {
          console.log(jsonifiedResponse)
          setArrivals(jsonifiedResponse)
      });
    }, [])

    console.log(arrivals);



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

  // console.log(props.monitoredStations[0].map_id);


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