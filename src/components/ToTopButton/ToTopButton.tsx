import Arrow from "../Icon/Arrow";
import "./ToTopButton.scss";

interface ToTopButtonProps {
  isScrolled: boolean;
}

const ToTopButton = ({ isScrolled }: ToTopButtonProps) => {
  if (!isScrolled) return null;
  return (
    <button className="to-top-btn">
      <span className="sr-only">Back to top</span>
      <Arrow />
    </button>
  );
};

export default ToTopButton;
