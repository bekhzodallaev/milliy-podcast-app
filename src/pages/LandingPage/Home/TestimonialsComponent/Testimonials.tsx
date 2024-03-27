import React from "react";
import ReusableTestimonials from "./ReusableTestimonials";
import { testimonialsData } from "./CardDetails";
import classes from "./Testimonials.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./CardDetails";
import { useTranslation } from "react-i18next";
const cards = testimonialsData.map((testimonial, index) => (
  <div key={index} className={classes.testimonials_card}>
    <ReusableTestimonials
      comment={testimonial.comment}
      image={testimonial.image}
      name={testimonial.name}
      profession={testimonial.profession}
    />
  </div>
));

function Testimonials() {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <div className={classes.texts}>
        <p className={classes.heading}>{t("testimonial.title")}</p>
      </div>
      <Carousel
        arrows={true}
        className={classes.carousel}
        responsive={responsive}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
      >
        {cards}
      </Carousel>
    </div>
  );
}

export default Testimonials;
