import React from "react";

export default function Trip(props) {
  return (
    <>
      <div className="trip--container">
        <img src={`images/${props.image}`} className="trip--img" alt="" />
        <div className="trip">
          <div className="trip--location">
            <img src={"images/pin.svg"} alt="" />
            <div className="trip--country">{props.location.country}</div>
            <a href={props.location.map_link} className="trip--maplink">
              View on Google Maps
            </a>
          </div>
          <div className="trip--info">
            <div className="trip--title">{props.title}</div>
            <div className="trip--date">
              {props.date.start} - {props.date.end}
            </div>
            <div className="trip--desc">{props.description}</div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
