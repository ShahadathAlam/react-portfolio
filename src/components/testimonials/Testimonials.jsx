import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Nadim",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusamus, officia nemo soluta obcaecati sapiente in consectetur reprehenderit, odio quas earum doloremque quisquam! Enim voluptate tenetur nobis aut omnis nam?",
  },
  {
    avatar: AVTR2,
    name: "Ridoy",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusamus, officia nemo soluta obcaecati sapiente in consectetur reprehenderit, odio quas earum doloremque quisquam! Enim voluptate tenetur nobis aut omnis nam?",
  },
  {
    avatar: AVTR3,
    name: "Sohan",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusamus, officia nemo soluta obcaecati sapiente in consectetur reprehenderit, odio quas earum doloremque quisquam! Enim voluptate tenetur nobis aut omnis nam?",
  },
  {
    avatar: AVTR4,
    name: "Faisal",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusamus, officia nemo soluta obcaecati sapiente in consectetur reprehenderit, odio quas earum doloremque quisquam! Enim voluptate tenetur nobis aut omnis nam?",
  },
];

const Testimonials = () => {
  return (
    <section>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>

            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;

// const Testimonials = () => {
//   return (
//     <section>
//       <h5>Review from Clients</h5>
//       <h2>Testimonials</h2>

//       <div className="container testimonials__container">
//         <article className="testimonial">
//           <div className="client__avatar">
//             <img src={AVTR1} alt="Avatar one" />
//           </div>

//           <h5 className="client__name">Ernest Achiever</h5>
//           <small className="client__review">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
//             voluptatibus, molestiae, voluptates magnam eligendi dolor aspernatur
//             error cum mollitia accusantium temporibus libero odio assumenda.
//             Similique exercitationem possimus dolores eligendi quos.
//           </small>
//         </article>

//         <article className="testimonial">
//           <div className="client__avatar">
//             <img src={AVTR2} alt="Avatar one" />
//           </div>

//           <h5 className="client__name">Ernest Achiever</h5>
//           <small className="client__review">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
//             voluptatibus, molestiae, voluptates magnam eligendi dolor aspernatur
//             error cum mollitia accusantium temporibus libero odio assumenda.
//             Similique exercitationem possimus dolores eligendi quos.
//           </small>
//         </article>

//         <article className="testimonial">
//           <div className="client__avatar">
//             <img src={AVTR3} alt="Avatar one" />
//           </div>

//           <h5 className="client__name">Ernest Achiever</h5>
//           <small className="client__review">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
//             voluptatibus, molestiae, voluptates magnam eligendi dolor aspernatur
//             error cum mollitia accusantium temporibus libero odio assumenda.
//             Similique exercitationem possimus dolores eligendi quos.
//           </small>
//         </article>

//         <article className="testimonial">
//           <div className="client__avatar">
//             <img src={AVTR4} alt="Avatar one" />
//           </div>

//           <h5 className="client__name">Ernest Achiever</h5>
//           <small className="client__review">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
//             voluptatibus, molestiae, voluptates magnam eligendi dolor aspernatur
//             error cum mollitia accusantium temporibus libero odio assumenda.
//             Similique exercitationem possimus dolores eligendi quos.
//           </small>
//         </article>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
