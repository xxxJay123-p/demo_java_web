import React, { useEffect } from "react";
import { Github, Instagram, Facebook } from "react-bootstrap-icons";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-secondary da-section" data-aos="fade-up">
      <div className="container text-white">
        <div className="row" data-aos="fade-up">
          <div className="col-md-5">
            <div className="h2 mb-4">Java. Studios</div>
            <p className="mb-3">contact@java.studio</p>
          </div>
          <div className="col-md-4">
            <div className="h6 pb-2">Follow Us</div>
            <ul>
              <li className="mb-1">
                <a className="da-social-link" href="#">
                  <i aria-hidden="true">
                    {" "}
                    <Github />
                  </i>
                  <span className="ml-2">Github</span>
                </a>
              </li>
              <li className="mb-1">
                <a className="da-social-link" href="#">
                  <i aria-hidden="true">
                    {" "}
                    <Instagram />
                  </i>
                  <span className="ml-2">Instagram</span>
                </a>
              </li>
              <li className="mb-1">
                <a className="da-social-link" href="#">
                  <i aria-hidden="true">
                    {" "}
                    <Facebook />
                  </i>
                  <span className="ml-2">Facebook</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="h6 pb-4">Copyright</div>
            <p className="pb-1"> Java. Studios. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
