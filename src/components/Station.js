import React from "react";

function Station(props){
  return (
    <React.Fragment>
      <tr>
        <td>{props.station}</td>
        <td><button type="button" onClick={props.deleteStations}>Remove</button></td>
      </tr>
    </React.Fragment>
  );
}

export default Station;