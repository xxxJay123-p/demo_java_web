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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7382.833743826122!2d114.16961399357906!3d22.3000686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400ef646de2a5%3A0x43755790396a351e!2sSCOPE%20TST%20East%20Learning%20Centre!5e0!3m2!1szh-TW!2shk!4v1702459094999!5m2!1szh-TW!2shk"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="addrees"></div>
        </div>
      </div>
    </section>
  );
}

export default Location;
