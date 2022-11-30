import React from "react";
import './App.css';
import Header from "./Header";
import ArrivalList from "./ArrivalList";
import Map from "./Map";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ArrivalList />
      <Map />
    </React.Fragment>
  );
}

export default App;
