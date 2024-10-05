import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Forkify - Online Recipe Finder",
    github: "https://github.com/ShahadathAlam/forkify-course-video",
    demo: "https://forkify-shahadath.netlify.app",
  },

  {
    id: 2,
    image: IMG2,
    title: "Customizable Workout Timer App",
    github: "https://github.com/ShahadathAlam/workout-timer",
    demo: "https://workout-timer-shahadath.netlify.app",
  },

  {
    id: 3,
    image: IMG3,
    title: "Eat & Split - Bill Splitting Made Easy",
    github: "https://github.com/ShahadathAlam/eat-n-split-project",
    demo: "https://eat-n-split-shahadath.netlify.app",
  },

  {
    id: 4,
    image: IMG4,
    title: "Travel Checklist Manager",
    github: "https://github.com/ShahadathAlam/travel-list",
    demo: "https://travel-list-shahadath.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>

            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>

              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

// const Portfolio = () => {
//   return (
//     <section id="portfolio">
//       <h5>My Recent Work</h5>
//       <h2>Portfolio</h2>

//       <div className="container portfolio__container">
//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG} alt="project-image" />
//           </div>
//           <h3>This is a portfolio item title</h3>

//           <div className="portfolio__item-cta">
//             <a
//               href="https://github.com/ShahadathAlam/forkify-course-video"
//               className="btn"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Github
//             </a>

//             <a
//               href="https://forkify-shahadath.netlify.app"
//               className="btn btn-primary"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Live Demo
//             </a>
//           </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG} alt="project-image" />
//           </div>
//           <h3>This is a portfolio item title</h3>

//           <div className="portfolio__item-cta">
//             <a
//               href="https://github.com/ShahadathAlam/forkify-course-video"
//               className="btn"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Github
//             </a>

//             <a
//               href="https://forkify-shahadath.netlify.app"
//               className="btn btn-primary"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Live Demo
//             </a>
//           </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG} alt="project-image" />
//           </div>
//           <h3>This is a portfolio item title</h3>

//           <div className="portfolio__item-cta">
//             <a
//               href="https://github.com/ShahadathAlam/forkify-course-video"
//               className="btn"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Github
//             </a>

//             <a
//               href="https://forkify-shahadath.netlify.app"
//               className="btn btn-primary"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Live Demo
//             </a>
//           </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG} alt="project-image" />
//           </div>
//           <h3>This is a portfolio item title</h3>

//           <div className="portfolio__item-cta">
//             <a
//               href="https://github.com/ShahadathAlam/forkify-course-video"
//               className="btn"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Github
//             </a>

//             <a
//               href="https://forkify-shahadath.netlify.app"
//               className="btn btn-primary"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Live Demo
//             </a>
//           </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG} alt="project-image" />
//           </div>
//           <h3>This is a portfolio item title</h3>

//           <div className="portfolio__item-cta">
//             <a
//               href="https://github.com/ShahadathAlam/forkify-course-video"
//               className="btn"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Github
//             </a>

//             <a
//               href="https://forkify-shahadath.netlify.app"
//               className="btn btn-primary"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Live Demo
//             </a>
//           </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG} alt="project-image" />
//           </div>
//           <h3>This is a portfolio item title</h3>

//           <div className="portfolio__item-cta">
//             <a
//               href="https://github.com/ShahadathAlam/forkify-course-video"
//               className="btn"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Github
//             </a>

//             <a
//               href="https://forkify-shahadath.netlify.app"
//               className="btn btn-primary"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Live Demo
//             </a>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;
