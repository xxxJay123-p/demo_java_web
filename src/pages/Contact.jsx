import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Typewriter from "typewriter-effect";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../contactConfig";

function Contact() {
  return (
    <main className="contact-container">
      <section>
        <h2>About us</h2>
        <Typewriter
          options={{
            strings: [
              "Welcome to Java Studios - Where coffee meets creativity!",
              "Get your daily dose of Java with us!",
              "Unleash your creativity while sipping on your favorite brew!",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <div className="typewriter-effect">
          <SyntaxHighlighter
            className="code-intro "
            id={"typewriter"}
            language="java"
            style={tomorrow}
            wrapLines={true}
            showLineNumbers={true}
          >
            {`public class CoffeeShopAndStudio {
private String name = "Java. Studios ";
private String[] address = {
                        "2410, 2/F,",
                        "Li Dak Sum Yip Yio Chin Academic Building (LI)",
                        "City University of Hong Kong, Tat Chee Avenue,",
                        "Kowloon, Hong Kong"
                      };
private String[] services = {
                          "Order Coffee",
                          "Buy product",
                          "Learn Courses"
                        };
}`}
          </SyntaxHighlighter>
        </div>{" "}
      </section>
      <section>
        <h3> Our Location</h3>
        <div class="map__bg">
          <div class="map__container">
            <div class="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7382.833743826122!2d114.16961399357906!3d22.3000686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400ef646de2a5%3A0x43755790396a351e!2sSCOPE%20TST%20East%20Learning%20Centre!5e0!3m2!1szh-TW!2shk!4v1702459094999!5m2!1szh-TW!2shk"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div class="addrees"></div>
          </div>
        </div>
      </section>
      <section>
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact Us</h1>
          <h3 className="color_sec py-4">Get in touch</h3>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
        <div className="form-container">
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
        <Typewriter
          options={{
            strings: ["Thank you!", "Get in touch"],
            autoStart: true,
            loop: true,
          }}
        />
      </section>
    </main>
  );
}

export default Contact;
