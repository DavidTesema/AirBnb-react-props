import React from "react";

export default function Card(props) {
  return (
    <div>
      <div >
        <img width={"250px"} src={props.val.coverImg} className="card--image" />
        <div className="card--stats">
          <img src="./airbnb/Star 1.png" className="card--star" />
          <span>{props.val.stats.rating}</span>
          <span className="text-secondary">{props.val.stats.reviewCount} • </span>
          <span className="text-secondary">{props.val.location}</span>
        </div>
        <p>{props.val.title}</p>
        <p>
          <strong>From ${props.val.price} /</strong> <span>person</span>
        </p>
        {props.val.openSpots ===0 && <button type="button" class="btn btn-outline-danger">SOLD OUT</button>
}
      </div>
    </div>
  );
}
