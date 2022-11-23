import React from "react";
import Confetti from "react-confetti";

export default function Conf(props) {
  const { x, y, width } = props.confettiPos;
  return <Confetti run={props.run} confettiSource={{ x: x, y: y, w: width }} />;
}
