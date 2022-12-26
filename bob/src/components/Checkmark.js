import React, { useState, useEffect, useRef } from "react";

export default function Checkmark(props) {
  return props.result ? (
    <svg viewBox="0 0 199.99721 200.59409" width="99.998604" height="100.29704">
      <g class="checkmark" transform="translate(-115.2211,-314.31628)">
        <path
          opacity="0"
          id="path127395"
          d="m 118.4563,450.21991 13.5,-18 62.361,41.139 c 23.444,-74.889 65.264,-124.69 101.89,-155.89 l 15.74999,18 c -39.97799,31.18 -94.87699,106.75 -101.24999,175.5 z"
          fill="#00FF00"
        />
      </g>
    </svg>
  ) : (
    <svg viewBox="0 0 194.51869 196.44678" width="97.259346" height="98.223389">
      <g class="checkmark" transform="translate(-115.00943,-315.2497)">
        <path
          opacity="0"
          id="path127393"
          fill="#FF0000"
          d="m 134.22179,318.38142 -16.031,18.914 c 26.238,21.927 51.682,45.15601 75.867,68.97701 -28.01299,28.677 -53.83699,58.099 -75.867,86.484 l 18.562,15.75 c 22.962,-27.77199 48.339,-56.14999 75.51601,-83.95299 27.177,27.803 52.554,56.181 75.516,83.95299 l 18.562,-15.75 c -22.03,-28.38499 -47.85401,-57.80799 -75.867,-86.48399 24.185,-23.82 49.63,-47.05001 75.867,-68.97701 l -16.031,-18.914 c -26.794,21.659 -53.115,45.202 -78.047,69.60901 -24.932,-24.40701 -51.253,-47.95001 -78.04701,-69.60902 z"
        />
      </g>
    </svg>
  );
}
