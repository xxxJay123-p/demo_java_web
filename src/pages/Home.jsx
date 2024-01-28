import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

//components
import About from "../components/home-components/About";
import Services from "../components/home-components/Services";
import Video from "../components/home-components/Video";
import Comments from "../components/home-components/Comment";
// import Menu from "../components/Menu";

function Home() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <main className="">
        <About />
        <Services />
        <Video />

        <Comments />
      </main>
    </>
  );
}

export default Home;
