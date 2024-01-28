import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Card(props) {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div data-aos={props.animation}></div>
    </div>
  );
}
export default Card;
