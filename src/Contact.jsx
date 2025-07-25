import React from "react";
import contactAbstract from "./assets/abstract-contact.svg";
import "./css/contact.css";

const Contact = () => {
  return (
    <div className="tablet:w-full tablet:pb-5 mt-40" id="contact">
  <div className="absolute tablet:-mt-40 mobile:-mt-12">
    <img
      src={contactAbstract}
      alt="abstract thing"
      className="mobile:w-28 tablet:w-auto"
    />
  </div>
  <div className="flex justify-center items-center main-container w-full grow p-5">
    <div className="pt-5 pl-5 pr-5 rounded-3xl bg-font-color uppercase flex flex-col justify-between grow w-full">
      <div className="flex flex-col tablet:items-end mobile:text-7xl mobile:items-start mobile:ml-0 tablet:ml-0 grow">
        <h1 className="tablet:text-11xl desktop:text-14xl font-clash-grotesk text-bg-color uppercase tablet:-mt-12 w-full flex justify-center">
          contact
        </h1>
        <p className="text-bg-color tablet:-mt-10 tablet:w-2/6 mobile:w-80 tablet:text-right tablet:text-lg mobile:text-sm">
          Let's Connect! Reach out and let the conversation begin. Your thoughts, questions, and ideas are always welcome.
        </p>
      </div>
      <div className="text-bg-color flex tablet:flex-row mobile:flex-col tablet:items-end tablet:justify-between pt-20 font-urbanist font-bold text-lg -mb-3">
        <div className="flex tablet:items-end mobile:flex-col tablet:flex-row">
          <div>
            <ul className="list-none">
              <li>
                <a href="https://bento.me/saieshwar" className="hover-link" target="_blank">
                  <span><span>bento</span><span>bento</span></span>
                </a>
              </li>
              <li className="-mt-5">
                <a href="https://www.instagram.com/m.saieshwarrr/" className="hover-link" target="_blank">
                  <span><span>instagram</span><span>instagram</span></span>
                </a>
              </li>
              <li className="-mt-5">
                <a href="https://www.behance.net/saieshwar" className="hover-link" target="_blank">
                  <span><span>behance</span><span>behance</span></span>
                </a>
              </li>
              <li className="-mt-5">
                <a href="https://www.linkedin.com/in/saieshwarrr/" className="hover-link" target="_blank">
                  <span><span>linkedin</span><span>linkedin</span></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="tablet:ml-20">
            <ul>
              <li>
                <a href="/pdf/CV_Saieshwar.pdf" download="Resume Saieshwar" className="hover-link" target="_blank">
                  <span><span>resume</span><span>resume</span></span>
                </a>
              </li>
              <li className="-mt-5">
                <a href="tel:+918956259222" className="hover-link" target="_blank">
                  <span><span>+91 8956259222</span><span>+91 8956259222</span></span>
                </a>
              </li>
              <li className="-mt-5">
                <a href="mailto:saieshwardev@gmail.com" className="hover-link" target="_blank">
                  <span><span>saieshwardev@gmail.com</span><span>saieshwardev@gmail.com</span></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mb-5">©all rights reserved</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Contact;
