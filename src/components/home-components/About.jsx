import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from "../../asset/images/product-5.png";
import img2 from "../../asset/images/product-6.png";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="about section" id="about">
      <Container fluid className="about__container">
        <Row className="grid">
          <Col className="about__data">
            <div data-aos="fade-right">
              <h2 className="section__title about__title">
                All about Java. <br />
                <b> Enjoy the coffee and your works.</b>
              </h2>
              <p className="about__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem obcaecati error, autem repellendus labore
                deserunt ab? Optio quibusdam quis officia laudantium, tempora,
                cupiditate dolorem iure delectus aliquid totam nesciunt quia
                autem excepturi iste, molestias labore voluptates. Eum sequi
                laborum voluptas cum, quaerat magni et quibusdam aliquid unde
                voluptatum cupiditate laboriosam.
              </p>
              <button className="" id="knowMoreButton">
                Know More
              </button>
            </div>
          </Col>

          <Col className="about__img">
            <div className="about__img-overlay" data-aos="fade-left">
              <img src={img2} alt="" className="about__img-one" />
            </div>

            <div className="about__img-overlay" data-aos="fade-left">
              <img src={img1} alt="" className="about__img-two" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;