import ImagePlaying from "../assets/image-playing.png";
import ArrowRight from "../assets/Arrow - Right 2.svg";
interface ReusableComponentProps {
  text: React.ReactNode;
  buttonText: string;
  linkText: string;
  buttonClassName?: string;
}

const ReusableComponent: React.FC<ReusableComponentProps> = ({
  text,
  buttonText,
  buttonClassName,
  linkText,
}) => {
  return (
    <div>
      <img src={ImagePlaying} alt="Image-playing" />
      <div>{text}</div>
      <div className="buttons">
        <button className={buttonClassName}>{buttonText}</button>
        <p>{linkText}</p>
        <img src={ArrowRight} alt="" />
      </div>
    </div>
  );
};

export default ReusableComponent;
