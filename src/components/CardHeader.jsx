import BlackCar from "../assets/images/blackPorshe.webp";
import blackCarSide from "../assets/images/sterWheel1.webp";
import sterWheel1 from "../assets/images/blackcarSide.webp";

const CardHeader = ({ openInterior }) => {
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
      <div>
        <img
          className="header-car-img"
          src={openInterior ? blackCarSide : sterWheel1}
          alt="black-car"
        />
      </div>
    </div>
  );
};

export default CardHeader;
