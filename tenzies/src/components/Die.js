import React from "react";

export default function Die(props) {
  const { id, status, value, holdDie } = props;
  return (
    <button
      id={id}
      className={`btn die ${status ? "selected" : ""}`}
      onClick={(event) => holdDie(event, id, value)}
    >
      {value}
    </button>
  );
}
