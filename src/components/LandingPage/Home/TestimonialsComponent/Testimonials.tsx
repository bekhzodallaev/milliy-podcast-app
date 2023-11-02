import React, { useState, useEffect } from "react";
import ReusableTestimonials from "./ReusableTestimonials";
import { testimonialsData } from "./CardDetails";
import classes from "./Testimonials.module.css";
import EllipseActive from "../../../../assets/image-ellipse-active.svg";
import Ellipse from "../../../../assets/image-ellipse.svg";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const setCards = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(
        (activeIndex + 1) % Math.ceil(testimonialsData.length / 3)
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <div className={classes.container}>
      <div className={classes.texts}>
        <p className={classes.heading}>What Our Customers say</p>
        <p className={classes.text}>
          Read testimonials from satisfied users and industry figures
        </p>
      </div>
      <div className={classes.testimonials_card}>
        {testimonialsData
          .slice(activeIndex * 3, activeIndex * 3 + 3)
          .map((testimonial, index) => (
            <ReusableTestimonials
              key={index}
              comment={testimonial.comment}
              image={testimonial.image}
              name={testimonial.name}
              profession={testimonial.profession}
            />
          ))}
      </div>
      <div className={classes.buttons}>
        {Array.from({ length: Math.ceil(testimonialsData.length / 3) }).map(
          (item, index) => (
            <img
              key={index}
              src={index === activeIndex ? EllipseActive : Ellipse}
              alt=""
              onClick={() => setCards(index)}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Testimonials;
