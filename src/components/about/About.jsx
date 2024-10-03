import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { GoProject } from "react-icons/go";
import ME from "../../assets/me-about.JPG";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <GoProject className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Assalamualaikum, I'm Shahadath Alam, a passionate and driven web
            developer with a strong foundation in front-end technologies like
            HTML, CSS, Bootstrap, JavaScript, and React. I'm constantly
            expanding my skills and currently diving deeper into Next.js as I
            work towards becoming a full-stack developer. I love building clean,
            responsive, and user-friendly websites and applications that solve
            real-world problems. I thrive on learning new technologies and enjoy
            tackling challenges head-on, always eager to bring innovative ideas
            to life. Let's build something amazing together!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
