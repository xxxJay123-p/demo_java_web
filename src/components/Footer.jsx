import React, { useEffect } from "react";
import { Github, Instagram, Facebook } from "react-bootstrap-icons";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <footer class="bg-secondary da-section" data-aos="fade-up">
      <div class="container text-white">
        <div class="row" data-aos="fade-up">
          <div class="col-md-5">
            <div class="h2 mb-4">Java. Studios</div>
            <p class="mb-3">contact@java.studio</p>
          </div>
          <div class="col-md-4">
            <div class="h6 pb-2">Follow Us</div>
            <ul>
              <li class="mb-1">
                <a class="da-social-link" href="#">
                  <i aria-hidden="true">
                    {" "}
                    <Github />
                  </i>
                  <span class="ml-2">Github</span>
                </a>
              </li>
              <li class="mb-1">
                <a class="da-social-link" href="#">
                  <i aria-hidden="true">
                    {" "}
                    <Instagram />
                  </i>
                  <span class="ml-2">Instagram</span>
                </a>
              </li>
              <li class="mb-1">
                <a class="da-social-link" href="#">
                  <i aria-hidden="true">
                    {" "}
                    <Facebook />
                  </i>
                  <span class="ml-2">Facebook</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div class="h6 pb-4">Copyright</div>
            <p class="pb-1"> Java. Studios. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
