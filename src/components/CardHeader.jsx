import blackCarSide from "../assets/images/sterWheel1.webp";
import sterWheel1 from "../assets/images/blackcarSide.webp";
import backPorshe from "../assets/images/backPorshe.webp";

const CardHeader = ({ openInterior, openExterior }) => {
  return (
    <div className="car-header-wrapper">
      <div className="car-header">
        <h1>
          911 Carrera 4{" "}
          <span className="number">
            {openInterior ? " interior" : " exterior"}
          </span>
        </h1>
        {!openInterior && (
          <div className="btn-like">Your dream becomes reality</div>
        )}
      </div>
      <div className="transition-container flex">
        {!openExterior ? (
          <img
            className="header-car-img"
            src={openInterior ? blackCarSide : sterWheel1}
            alt="black-car"
          />
        ) : (
          <img className="header-car-img" src={backPorshe} alt="black-car" />
        )}
      </div>
    </div>
  );
};

export default CardHeader;
