import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <div className="card--image">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={`images/${props.coverImg}`} className="card--image" alt="" />
      </div>
      <div className="card--stats">
        <img src={`images/star.svg`} alt="" className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) •</span>
        <span className="gray">{props.location}</span>
      </div>
      <div className="card--desc">
        <p>{props.title}</p>
        <p>
          <span className="bold">from ${props.price}</span>/ person
        </p>
      </div>
    </div>
  );
}
