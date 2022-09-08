import React from "react";
import AirBnb from "./comps/ex-two/AirBnb";
import "./comps/css/style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <nav>
        <img src="./airbnb/airbnb 1.png" />
      </nav>
      <div className="container">
        <AirBnb />
      </div>
    </div>
  );
}
