import React from "react";
import Data from "./components/Data";
import Info from "./components/info";
import "./App.css";


function App() {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 info px-3">
              <Info />
            </div>
            <div className="col-sm-7 form">
              <Data />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
