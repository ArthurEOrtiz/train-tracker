import React from 'react';
import stops  from './../txt/stops.txt';
import "./StationList.css";


function StationList(){
  fetch(stops)
    .then(r => r.text()) 
    .then(t => {
      console.log(typeof t);
    });

  return (
    <React.Fragment>
      <div className="StationList-Container">
        <h2>Arrival Times</h2>
        <div className="StationList-Columns">

        </div>
      </div>
    </React.Fragment>
  );
}


export default StationList;