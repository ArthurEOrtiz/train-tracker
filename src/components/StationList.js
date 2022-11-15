import React from 'react';
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
            <tbody>
              <tr>
                <td>Blue</td>
                <td>Rosemont</td>
                <td>O'Hare</td>
                <td>12:35pm</td>
              </tr>
              <tr>
                <td>Red</td>
                <td>Jackson</td>
                <td>Howard</td>
                <td>1:45pm</td>
              </tr>
              <tr>
                <td>Pink</td>
                <td>18th</td>
                <td>54th/Cermak</td>
                <td>12:55pm</td>
              </tr>
              <tr>
                <td>Pink</td>
                <td>Morgan</td>
                <td>Loop 'L'</td>
                <td>Delayed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}


export default StationList;