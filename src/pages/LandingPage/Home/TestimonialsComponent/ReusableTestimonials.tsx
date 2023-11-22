import React from "react";
import StarImage from "../../../../assets/LandingPageAssets/HomePage/TestimonialsAssets/image-star.svg";
import classes from "./Testimonials.module.css";
interface ReusableTestimonialsProps {
  comment: string;
  image: string;
  name: string;
  profession: string;
}
const ReusableTestimonials: React.FC<ReusableTestimonialsProps> = ({
  comment,
  image,
  name,
  profession,
}) => {
  return (
    <div className={classes.testimonials_card_container}>
      <div className={classes.comment_container}>
        <div className={classes.rating}>
          <img src={StarImage} alt="" />
          <img src={StarImage} alt="" />
          <img src={StarImage} alt="" />
          <img src={StarImage} alt="" />
          <img src={StarImage} alt="" />
        </div>
        <p className={classes.comment}>{comment}</p>
      </div>
      <div className={classes.user_info}>
        <div className={classes.user_image}>
          {" "}
          <img src={image} alt="" />
        </div>
        <div className={classes.user_info_details}>
          <p className={classes.name}>{name}</p>
          <p className={classes.profession}> {profession}</p>
        </div>
      </div>
    </div>
  );
};

export default ReusableTestimonials;
