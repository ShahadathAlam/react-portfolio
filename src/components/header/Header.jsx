import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { RiScrollToBottomFill } from "react-icons/ri";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Assalamualaikum, I'm</h5>
        <h1>Shahadath Alam</h1>
        <h5 className="text-light">Front-End Developer </h5>

        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          <RiScrollToBottomFill />
        </a>
      </div>
    </header>
  );
};

export default Header;
