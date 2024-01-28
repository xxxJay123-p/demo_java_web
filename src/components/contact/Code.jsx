import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Typewriter from "typewriter-effect";
import { Container, Row, Col } from "react-bootstrap";

function Code() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <h2 data-aos="fade-left">About us</h2>
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
      <div className="typewriter-effect" data-aos="fade-right">
        <SyntaxHighlighter
          className="code-intro "
          id={"typewriter"}
          language="java"
          style={tomorrow}
          wrapLines={true}
          showLineNumbers={true}
        >
          {`public className CoffeeShopAndStudio {
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
  );
}

export default Code;
