import React from 'react';
import Arrival from './Arrival';
import "./ArrivalList.css";



function ArrivalList(props){


    return (
      <React.Fragment>
        {/* {console.log("arrival list has rendered")} */}
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
              {props.arrivals.map((arrival, index) =>
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