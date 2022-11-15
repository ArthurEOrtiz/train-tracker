import React from "react";
import Header from "./Header";
// import MapLoader from "./MapLoader";
// import StationList from "./StationList";
import './App.css';
import StationList from "./StationList";

function App() {
  return (
    <React.Fragment>
      <Header />
      <StationList />
    </React.Fragment>
  );
}

export default App;
