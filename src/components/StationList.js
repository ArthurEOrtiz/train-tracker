import React from 'react';
import Station from './Station';
// import stops  from './../txt/stops.txt';
import "./StationList.css";


function StationList(){
  
  // fetch(stops)
  //   .then(r => r.text()) 
  //   .then(t => {
  //     console.log(typeof t);
  // });


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
            <Station />
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}


export default StationList;