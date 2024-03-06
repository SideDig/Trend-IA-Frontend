import logo from "../../assets/img/TrendIA.png";
import "../../styles/Login/overlay.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Overlay = () => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <img className="img_logo" src={logo} />
          <br />
        </div>
        <div className="overlay-panel overlay-right">
          <img className="img_logo" src={logo} />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Overlay;