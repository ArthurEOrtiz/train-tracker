import React from 'react';
import ArrivalList from './ArrivalList';
import Map from './Map';

function ArrivalControl(){

  return (
    <React.Fragment>
      <ArrivalList />
      <Map />
    </React.Fragment>
  );
}

export default ArrivalControl;