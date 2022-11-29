import React from "react";
import './App.css';
import Header from "./Header";
import StationList from "./StationList";
import Map from "./Map";

function App() {
  return (
    <React.Fragment>
      <Header />
      <StationList />
      <Map />
    </React.Fragment>
  );
}

export default App;
