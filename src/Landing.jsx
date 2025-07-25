import React, { useState, useEffect, useRef } from "react";
import DateObject from "react-date-object";
import gsap from "gsap";
import "./css/styles.css";
import CustomCursor from "./utils/CustomCursor";
import svgLanding from "./assets/abstract-landing.svg";
import { useParallax, ParallaxProvider } from "react-scroll-parallax";
import smoothscroll from "smoothscroll-polyfill";
import "./animations/hover-animation.css";


const Landing = () => {
  const [time, setTime] = useState(
    new DateObject({ timezone: "Europe/Bucharest" })
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Initialize based on window size
  const smoothScrollWrapperRef = useRef(null);

  // Add a resize listener to handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const parallaxConfig = isMobile
    ? {
        titleDesigner: { translateX: [-50, 20], speed: 5 }, // Adjust for mobile
        titleDeveloper: { translateX: [20, -10], speed: 5 },
      }
    : {
        titleDesigner: {
          translateX: [10, -20],
          speed: 10,
          easing: "easeInOutQuad",
        }, // Desktop values
        titleDeveloper: {
          translateX: [0, 20],
          speed: 10,
          easing: "easeInOutQuad",
        },
      };

  const { ref: titleDesigner } = useParallax(parallaxConfig.titleDesigner);
  const { ref: titleDeveloper } = useParallax(parallaxConfig.titleDeveloper);
  const speed = 0.08;
  let offset = 0;
  let callScroll;

  const handleLinkClick = (sectionId, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const section = document.getElementById(sectionId);
    if (section) {
      // Scroll to the section using custom smoothScroll logic
      const targetOffset = section.offsetTop;
      window.scrollTo({
        top: targetOffset, // Use native scroll for compatibility
      });
    }
  };

  useEffect(() => {
    gsap.to(".blink-colon", {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });

    gsap.from(".custom-animation", {
      opacity: 1,
      ease: "power4.inOut",
      duration: 1.5,
      delay: 0.5,
      stagger: 0.2,
    });

    const interval = setInterval(() => {
      setTime(new DateObject({ timezone: "Europe/Bucharest" }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const hours = time.format("hh");
  const minutes = time.format("mm");
  const ampm = time.format("A");

  const handleLinkClickDebug = (section) => {
    console.log(`Clicked on ${section}`);
  };

  return (
    <div className="w-full mt-5 h-screen overflow-hidden">
    <div>
      <div className="flex justify-between overflow-hidden tablet:flex-row mobile:flex-col -z-10">
        <div className="flex justify-center items-center">
          <div className="flex flex-col font-urbanist custom-animation tablet:ml-5 mobile:-ml-24">
            <h1>SAIESHWAR</h1>
            <h1 className="font-extrabold">DEVELOPER & CYBERSECURITY ENTHUSIAST</h1>
          </div>
          <div className="flex flex-col ml-3 font-bold text-white custom-animation font-urbanist">
            <h1>24</h1>
            <h1>04</h1>
          </div>
        </div>
        <div className="font-urbanist custom-animation mobile:mt-5 tablet:mt-0 mobile:ml-10 tablet:ml-0">
          <p>LOCATION</p>
          <p className="font-extrabold">
            GOA, IN, {hours}
            <span className="blink-colon">:</span>
            {minutes} {ampm}
          </p>
        </div>
        <div className="font-urbanist flex flex-col custom-animation mr-5 mobile:mt-5 tablet:mt-0 mobile:ml-10">
          <p>NAVIGATION</p>
          <div className="flex font-extrabold z-10">
            <a
              href="#about"
              className="hover-link"
              onClick={(e) => handleLinkClick("about", e)}
            >
              <span>
                <span>ABOUT</span>
                <span>ABOUT</span>
              </span>
            </a>
            <a href="#work" className="hover-link ml-3">
              <span>
                <span>WORK</span>
                <span>WORK</span>
              </span>
            </a>
            <a href="#contact" className="hover-link ml-3">
              <span>
                <span>CONTACT</span>
                <span>CONTACT</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="custom-animation mobile:flex mobile:flex-col mobile:justify-center mobile:text-8xl tablet:text-12xl mobile:mt-20 tablet:mt-0">
        <div
          className="flex justify-center items-center font-clash-grotesk tablet:ml-80 tablet:-mr-96"
          ref={titleDesigner}
        >
          <img
            src={svgLanding}
            alt="image with a metal thing"
            className="z-10 -mr-48 mobile:w-40 tablet:w-auto"
          />
          <h1>DEVELOPER</h1>
        </div>
        <div className="flex justify-center items-center font-clash-grotesk tablet:-mt-52 tablet:mr-96 tablet:-ml-96 mobile:-mt-20">
          <h1 ref={titleDeveloper}>HACKER</h1>
        </div>
  
        <h2 className="flex justify-center items-start font-urbanist tablet:-ml-96 tablet:text-lg mobile:text-sm">
          Building secure and powerful digital experiences
        </h2>
      </div>
    </div>
  </div>
  
  );
};

export default Landing;
