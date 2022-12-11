import React from 'react';
import Arrival from './Arrival';
import "./ArrivalList.css";



function ArrivalList(props){


  const testData = props.arrivals.map((arrival, index) =>{
    const arrTime = new Date (arrival.arrT);
    let hour = arrTime.getHours();
    let minute = arrTime.getMinutes();
    const amPm = hour >= 12 ? 'PM' : 'AM'
    hour = hour % 12
    hour = hour ? hour : 12;
    minute = minute < 10 ? '0' + minute : minute;

    const amPmArrTime = `${hour}:${minute} ${amPm}`

    return {
      line: arrival.rt,
      station: arrival.staNm,
      destination: arrival.destNm,
      arrivalTime: amPmArrTime
    }
  })

  console.log(testData);

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
              {/* {props.arrivals.map((arrival, index) =>
                <Arrival 
                line={arrival.rt} 
                station={arrival.staNm}
                destination={arrival.destNm}
                arrivalTime={arrival.arrt}
                key={index}
                />
              )} */}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
}


export default ArrivalList;