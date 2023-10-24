import ImagePlaying from "../../../../assets/image-playing.png";
import styles from "./DiscoverStyles.module.css";
interface ReusableComponentProps {
  heading: string;
  text: string;
  headingClassName: string;
  textClassName?: string;
}

const ReusableComponent: React.FC<ReusableComponentProps> = ({
  heading,
  text,
  headingClassName,
  textClassName,
}) => {
  return (
    <div className={styles.reusableContainer}>
      <img src={ImagePlaying} alt="Image-playing" />
      <div className={headingClassName}>{heading}</div>
      <div className={textClassName}>{text}</div>
    </div>
  );
};

export default ReusableComponent;
