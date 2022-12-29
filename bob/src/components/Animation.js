import anime from "animejs";
import { useRef, useEffect } from "react";

export default function Animation(props) {
  const { end, isLoading, start } = props;
  const blobAnimation = useRef(null);
  const questionAnimation = useRef(null);
  const checkmarkAnimation = useRef(null);

  useEffect(() => {
    questionAnimation.current = null;
    questionAnimation.current = anime({
      targets: ".question--container",
      easing: "easeInOutExpo",
      "margin-left": "0",
      opacity: "1",
      duration: 500,
      direction: "normal",
      delay: anime.stagger(50),
    });
  }, [isLoading, start]);

  useEffect(() => {
    checkmarkAnimation.current = anime({
      targets: ".checkmark path",
      opacity: 1,
      translateX: "-50px",
      easing: "easeInOutExpo",
      duration: 250,
      delay: anime.stagger(50),
    });
  }, [end]);

  useEffect(() => {
    blobAnimation.current = anime({
      targets: ".player path",
      d: "M57.2,-67.1C73.6,-54.4,85.9,-35.9,89.5,-15.8C93.1,4.4,87.9,26,76,41.3C64.1,56.5,45.5,65.3,26.9,70.6C8.3,76,-10.4,77.9,-26.9,72.5C-43.3,67.1,-57.6,54.3,-65.6,38.7C-73.5,23.2,-75.2,4.8,-71.8,-12.4C-68.4,-29.6,-60.1,-45.6,-47.3,-58.9C-34.5,-72.2,-17.2,-82.9,1.6,-84.8C20.4,-86.7,40.8,-79.8,57.2,-67.1Z",
      duration: 3000,
      loop: true,
      direction: "alternate",
      easing: "linear",
    });
  }, []);
}
