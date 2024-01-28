import React from "react";
import { Container } from "react-bootstrap";
import { FaCoffee } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiCoffeePot } from "react-icons/gi";

const Services = () => {
  return (
    <Container text-center id="services">
      <h3 className="h3 pb-5 text-center" data-aos="fade-up">
        Our Services
      </h3>
      <section>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="card mb-3">
              <div
                className="card-body py-5"
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                <div className="text-primary">
                  <FaCoffee size={50} style={{ color: "brown" }} />
                  <p className="font-weight-bold" style={{ color: "brown" }}>
                    Order Coffee
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit primis
                  rutrum, nullam tempor malesuada laoreet tempus blandit pretium
                  etc.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card mb-3">
              <div
                className="card-body py-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="text-primary">
                  <IoFastFoodSharp size={50} style={{ color: "brown" }} />
                  <p className="font-weight-bold" style={{ color: "brown" }}>
                    Order Food
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit primis
                  rutrum, nullam tempor malesuada laoreet tempus blandit pretium
                  etc.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card mb-3">
              <div
                className="card-body py-5"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <div className="text-primary">
                  <GiCoffeePot size={50} style={{ color: "brown" }} />
                  <p className="font-weight-bold" style={{ color: "brown" }}>
                    Learn Course
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit primis
                  rutrum, nullam tempor malesuada laoreet tempus blandit pretium
                  etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Services;