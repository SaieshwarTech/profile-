import React, { useEffect, useRef } from "react";
import aboutPhoto from "./assets/about-1 copy.png";
import { useParallax } from "react-scroll-parallax";
import "./css/styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import aboutImage2 from "./assets/about-image-2.jpg";
import about1 from "./assets/ABOUT-1.png";
import about2 from "./assets/ABOUT-2.png";
import aboutImage2 from "./assets/about-image-2.jpg";
import aboutImage3 from "./assets/about-image-3.jpg";

import aboutImage3 from "./assets/about-image-3.jpg";

// Utility function to determine if the device is mobile
const isMobile = () => window.innerHeight <= 768;

const About = () => {
  //const parallaxConfig = isMobile()
    //? { translateY: [-30, 10], speed: 5 } 
    //: { translateY: [0, 50], speed: 10 }; 

  // Apply the parallax effect to the text
  //const { ref: textRef } = useParallax(parallaxConfig);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      ".about-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 120%",
          end: "bottom 50%",
          toggleActions: "play none none none",
          markers: false,
        },
      }
    );

    gsap.fromTo(
      ".p-about",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".p-about",
          start: "top 120%",
          end: "bottom 50%",
          toggleActions: "play none none none",
          markers: false,
        },
        delay: 0.2,
      }
    );
  }, []);

  return (
    <div className="w-full font-urbanist uppercase p-2 pb-40" id="about">
  <div>
    <h1 className="font-clash-grotesk tablet:text-10xl mobile:text-7xl about-title">general+</h1>
  </div>
  <div className="grid tablet:grid-cols-2 mobile:grid-cols-1 gap-4">
    <div className="font-bold p-about">
      <img src={about2} alt="photo with Saieshwar" className="rounded-lg" />
      <p className="mt-4 text-lg">saieshwar &nbsp;&nbsp; student & aspiring developer &nbsp;&nbsp; &#40;2004&#41;</p>
      <p className="text-lg">india &nbsp;&nbsp; goa &nbsp;&nbsp; rosary college</p>
    </div>
    <div className="p-about">
      <img src={about1} alt="photo with saieshwar and a laptop" className="rounded-lg" />
      <p className="text-lg mt-4">Hey there! I'm Saieshwar — a passionate BCA student, full-stack dev in the making, and someone who’s crazy about cybersecurity. I’ve always been that guy who’s curious about how the internet works behind the scenes.</p>
      <p className="text-lg mt-5">To me, building a website isn’t just about code — it’s about telling a story, solving problems, and creating impact. I'm here to design secure, interactive experiences that speak louder than words.</p>
      <h1 className="font-clash-grotesk tablet:text-10xl mobile:text-7xl">&#40;info&#41;</h1>
    </div>
  </div>
</div>

  );
};

export default About;
