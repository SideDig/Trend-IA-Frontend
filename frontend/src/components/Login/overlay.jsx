
import "../../styles/Login/overlay.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Overlay = () => {
  const urlImagenTrendIA = 'https://i.imgur.com/KQLfeW4.jpg';
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <img className="img_logo" src={urlImagenTrendIA} />
          <br />
        </div>
        <div className="overlay-panel overlay-right">
          <img className="img_logo" src={urlImagenTrendIA} />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Overlay;