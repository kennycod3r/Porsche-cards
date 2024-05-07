import BlackCar from "../assets/images/blackPorshe.webp";
//import BlackCarSide from "../assets/images/extcam102 (1).webp";
import blackCarSide from "../assets/images/blackcarSide.webp";

const CardHeader = () => {
    return (
      <div className="car-header-wrapper">
        <div className="car-header">
          <h1>Tycan <span className="number">13</span></h1>
          <div className="btn-like">from $ 90,900</div>
        </div>
        <div>
            <img className="header-car-img" src={blackCarSide} alt="black-car"/>
        </div>
      </div>
    );
  };
  
  export default CardHeader