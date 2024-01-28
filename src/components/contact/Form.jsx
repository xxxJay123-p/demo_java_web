import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import { Typewriter } from "typewriter-effect";

function Form() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <Col lg="8">
        <h1 className="display-4 mb-4">Contact Us</h1>
        <h3 className="color_sec py-4">Get in touch</h3>
        <hr className="t_border my-4 ml-0 text-left" />
      </Col>
      <div className="form-container" data-aos="flip-left">
        <Row className="sec_sp">
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
      <br />
      <h2 data-aos="flip-left">Thank You!</h2>
    </section>
  );
}

export default Form;
