import React from "react";
import Card from "./Card";
import Header from "./Header";
import data from "./data";

export default function AirBnb() {
  let cardData = data.map((val, i) => {
    return <Card val={val} />;
  });
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="d-flex justify-content-between mt-5">{cardData}</div>
    </div>
  );
}
