import React from "react";
import chicagoMap from "./../img/ctamap_Lsystem.png";

function Map(){
  const mapContainerStyling = {
    backgroundColor: 'white',
    width: '100%'
    
  }

  const imgStyling = {
    width: '100%',
  }

  return(
    <React.Fragment>
      <div style={mapContainerStyling}>
        <img style={imgStyling} src={chicagoMap} alt="map of the chicago L system" />
      </div>
    </React.Fragment>
  );
}
export default Map