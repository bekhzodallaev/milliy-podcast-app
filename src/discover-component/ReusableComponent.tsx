import ImagePlaying from "../assets/image-playing.png";
import ArrowRight from "../assets/arrow-right.svg";
import styles from "./DiscoverStyles.module.css";
interface ReusableComponentProps {
  heading: string;
  text: string;
  buttonText: string;
  linkText: string;
  buttonClassName?: string;
  headingClassName: string;
  textClassName?: string;
}

const ReusableComponent: React.FC<ReusableComponentProps> = ({
  heading,
  text,
  buttonText,
  buttonClassName,
  linkText,
  headingClassName,
  textClassName,
}) => {
  return (
    <div className={styles.reusableContainer}>
      <img src={ImagePlaying} alt="Image-playing" />
      <div className={headingClassName}>{heading}</div>
      <div className={textClassName}>{text}</div>
      <div className={styles.buttons}>
        <button className={buttonClassName}>{buttonText}</button>
        <div className={styles.linkContainer}>
          <p>{linkText}</p>
          <img src={ArrowRight} alt="Arrow-icon" />
        </div>
      </div>
    </div>
  );
};

export default ReusableComponent;
