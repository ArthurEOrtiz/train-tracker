import React from "react";
import chicagoMap from "./../img/ctamap_Lsystem.png";

function Map(){
  const mapContainerStyling = {
    backgroundColor: 'white',
    width: '100%',
    // padding: '0,0'
  }

  const imgStyling = {
    width: '100%'
  }

  return(
    <React.Fragment>
      <div style={mapContainerStyling}>
        <img usemap="#stationLinks" style={imgStyling} src={chicagoMap} alt="map of the chicago L system" />
        <map name="stationLinks">
          <area shape="rect" coords="0,0,400,400" alt="O'hare" href="#"/>
        </map>
      </div>
    </React.Fragment>
  );
}
export default Map