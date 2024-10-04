import React from "react";
import "./services.css";

import { AiOutlineCheck } from "react-icons/ai";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Crafting intuitive and engaging user interfaces to ensure
                seamless user experiences.
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Designing responsive and mobile-first layouts to enhance
                usability across all devices.
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Conducting user research and testing to improve product design
                based on real feedback.
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Creating wireframes, prototypes, and mockups to visualize and
                iterate on design concepts.
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Ensuring accessibility compliance for users with varying needs.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX DESIGN */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Building dynamic, responsive websites using modern technologies
                like React and Bootstrap.
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Developing scalable web applications that offer smooth and
                efficient performance.
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Ensuring SEO optimization to enhance visibility and performance
                in search engines.
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Implementing best coding practices for maintainable and
                high-quality code.
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Integrating third-party services and APIs to extend website
                functionality.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Crafting high-quality, engaging content that resonates with
                target audiences.
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Developing content strategies that align with brand goals and
                customer needs.
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Creating multimedia content, including blog posts, videos, and
                social media posts.
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Optimizing content for SEO, ensuring it reaches the intended
                audience effectively.
              </p>
            </li>

            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Collaborating with designers and developers to produce cohesive
                digital experiences.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
