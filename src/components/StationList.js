import React from 'react';
import Station from './Station';
import "./StationList.css";

function StationList (props){
  // console.log(props);
  return (
    <React.Fragment>
      <div className="StationList-Container">
        <div className="StationList-Table-Container">
        <h2>Monitered Stations</h2>
        <table className="ArrivalList-Table">
          <tbody>
            {props.selectedStations.map((station, index) =>
              <Station
              station={station.station_name}
              deleteStations={props.deleteStations}
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

export default StationList

