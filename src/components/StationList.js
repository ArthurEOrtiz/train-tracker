import React from 'react';
import stops  from './../txt/stops.txt';

function StationList(){

  fetch(stops)
    .then(r => r.text()) 
    .then(t => {
      console.log(t);
    });

  return (
    <React.Fragment>
      <h1> TRAIN STOPS </h1>
    </React.Fragment>
  );
}


export default StationList;