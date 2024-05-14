import blackCarSide from "../assets/images/sterWheel1.webp";
import sterWheel1 from "../assets/images/blackcarSide.webp";
import backPorshe from "../assets/images/backPorshe.webp";

const CardHeader = ({ openInterior, openExterior }) => {
  return (
    <div className="car-header-wrapper">
      <div className="car-header">
        <h1>
          Tycan{" "}
          <span className="number">
            {openInterior ? "14 interior" : "13 exterior"}
          </span>
        </h1>
        {!openInterior && <div className="btn-like">from $ 90,900</div>}
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
