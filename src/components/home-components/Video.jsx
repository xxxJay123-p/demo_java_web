import React, { useEffect } from "react";
import { Player } from "video-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Container, Col, Row, Image } from "react-bootstrap";

// import css
import "video-react/dist/video-react.css";

//asset
import poster from "../../asset/images/review-3.jpg";
import video from "../../asset/video.mp4";

const Video = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <div data-aos="fade-up">
        <Container style={{ paddingBottom: "100px" }}>
          <Row>
            <Col md={6}>
              <h1>Welcome to Java Coffee Shop</h1>
              <p>
                Java Coffee Shop is a cozy and welcoming cafe located in the
                heart of the city. Our baristas are passionate about coffee and
                work hard to craft the perfect cup for each of our customers.
              </p>
              <p>
                In this video, we'll take you on a tour of our cafe and show you
                how we make our signature drinks. You'll also get a glimpse of
                our delicious food menu and meet some of our team members.
              </p>
            </Col>
            <Col md={6}>
              <Image src="/assets/coffee-shop.jpg" fluid />
            </Col>
          </Row>
          <Row>
            <Col>
              <Player poster={poster} src={video} />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Video;
