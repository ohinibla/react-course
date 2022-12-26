import anime from "animejs/lib/anime.es.js";
import { useRef, useEffect, useState } from "react";

const Blob = (props) => {
  const animation = useRef(null);

  useEffect(() => {
    animation.current = anime({
      targets: ".player path",
      d: "M57.2,-67.1C73.6,-54.4,85.9,-35.9,89.5,-15.8C93.1,4.4,87.9,26,76,41.3C64.1,56.5,45.5,65.3,26.9,70.6C8.3,76,-10.4,77.9,-26.9,72.5C-43.3,67.1,-57.6,54.3,-65.6,38.7C-73.5,23.2,-75.2,4.8,-71.8,-12.4C-68.4,-29.6,-60.1,-45.6,-47.3,-58.9C-34.5,-72.2,-17.2,-82.9,1.6,-84.8C20.4,-86.7,40.8,-79.8,57.2,-67.1Z",
      duration: 3000,
      loop: true,
      direction: "alternate",
      easing: "linear",
    });
  }, []);

  return (
    <>
      <div className="player player1">
        <svg viewBox="100 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#deebf8"
            d="M53.3,-60C69.4,-50,82.9,-33.5,84.8,-16C86.6,1.5,76.7,20.1,65,34.9C53.3,49.8,39.8,61,23.4,69.1C7,77.1,-12.4,82.1,-30.6,78C-48.7,74,-65.8,60.9,-76.9,43.5C-87.9,26.1,-93,4.4,-87.6,-13.6C-82.2,-31.7,-66.5,-46,-50.1,-56C-33.8,-66,-16.9,-71.5,0.9,-72.5C18.6,-73.5,37.2,-70.1,53.3,-60Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="player player2">
        <svg viewBox="100 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#fffad1"
            d="M53.3,-60C69.4,-50,82.9,-33.5,84.8,-16C86.6,1.5,76.7,20.1,65,34.9C53.3,49.8,39.8,61,23.4,69.1C7,77.1,-12.4,82.1,-30.6,78C-48.7,74,-65.8,60.9,-76.9,43.5C-87.9,26.1,-93,4.4,-87.6,-13.6C-82.2,-31.7,-66.5,-46,-50.1,-56C-33.8,-66,-16.9,-71.5,0.9,-72.5C18.6,-73.5,37.2,-70.1,53.3,-60Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </>
  );
};

export default Blob;
