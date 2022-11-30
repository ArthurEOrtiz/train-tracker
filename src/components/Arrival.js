import React from "react";

function Arrival(props){

  return (
    <React.Fragment>
    <tr>
      <td>{props.line}</td>
      <td>{props.station}</td>
      <td>{props.destination}</td>
      <td>{props.arrivalTime}</td>
    </tr>
    </React.Fragment>
  );
}

export default Arrival;
