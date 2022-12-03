import React from "react";
import './App.css';
import Header from "./Header";
// import ArrivalList from "./ArrivalList";
// import Map from "./Map";
import ArrivalControl from "./ArrivalControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ArrivalControl />
    </React.Fragment>
  );
}

export default App;
