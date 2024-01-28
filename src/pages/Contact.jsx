import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

//components
import Code from "../components/contact/Code";
import Location from "../components/contact/Location";
import Form from "../components/contact/Form";

function Contact() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <main className="">
        <Code />
        <Location />
        <Form />
      </main>
    </>
  );
}

export default Contact;
