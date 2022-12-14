import React from "react";

function Station(props){
  console.log(props.station)
  return (
    <React.Fragment>
      <tr>
        <td>{props.station}</td>
        <td><button type="button" onClick={()=> props.deleteStations(props.station)}>Remove</button></td>
      </tr>
    </React.Fragment>
  );
}

export default Station;