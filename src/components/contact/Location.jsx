import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Location() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <h3> Our Location</h3>
      <div className="map__bg">
        <div className="map__container">
          <div className="map" data-aos="flip-left">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.4296740763248!2d114.16956262475043!3d22.33739929155078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040733e2820eb5%3A0xed1df9ccf98e6fe4!2z6aaZ5riv5Z-O5biC5aSn5a245bCI5qWt6YCy5L-u5a246Zmi!5e0!3m2!1szh-TW!2shk!4v1706428807616!5m2!1szh-TW!2shk"
              width="800"
              height="600"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <h1> Error to use iframe in React</h1>
            <h1>Need to use Google Map API</h1>
          </div>
          <div className="addrees"></div>
        </div>
      </div>
    </section>
  );
}

export default Location;
