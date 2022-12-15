import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "faisalakram is an excellent communicator. He works very hard and quickly- when a change was requested, he would have it implemented or updated by the following day. I learned that it is important to be specific with changes or requests",
    },
    {
      img: profilePic2,
      review:
        "Great work! Will be collaborating again. Enjoyed working with you.",
    },
    {
      img: profilePic3,
      review:
        "Excellent , excellent , excellent . . . from start to finish, this is a top rated gig, well worthy as a Fiverr's choice, and the end product is excellent he worked alone and he do what developers doing and more , Thank you so much faisalakram you are the best",
    },
    {
      img: profilePic4,
      review:
        "faisal was recommended to us by another business, and we are incredibly happy with the results. If you are thinking about having a solid and reliable front-end team, then faisal should be 1000% be apart of it. We will be back!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt=""/>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
