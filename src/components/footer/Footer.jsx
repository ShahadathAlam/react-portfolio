import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import IMG from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        <img src={IMG} alt="logo" className="footer__logo-image" />
      </a>

      <ul className="permalinks">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#experience">My Experience</a>
        <a href="#services">Services</a>

        <a href="#portfolio">Portfolio</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact Me</a>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/mdshahadathalam"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/ShahadathAlam"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/MdShahadathAlamOfficial"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2024 Shahadath Alam. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
