import CardHeader from "../CardHeader";
import CardListItem from "../CardListItem";
import ColorPicker from "../ColorPicker";
import Wheels from "../Wheels/Wheels";
import textPara from "../../assets/Text";
import PCardForm from "../../PorscheCardForm/PCardForm";

const InteriorCards = ({
  openExterior,
  openInterior,
  handleOpenExterior,
  handleChangeCar,
}) => {
  return (
    <div className="right-items">
      <div className="card-wrapper">
        <CardHeader openInterior={openInterior} />
        <ul>
          <CardListItem
            milesDes={"stearing"}
            rangeEpa={"wheel"}
            performance={
              "282 mi** (AMCI Testing Range) w/ Performance Battery Plus"
            }
          />
          <CardListItem
            milesDes={"stearing"}
            rangeEpa={"wheel"}
            performance={
              "282 mi** (AMCI Testing Range) w/ Performance Battery Plus"
            }
          />
        </ul>
        {!openInterior && (
          <div className="flex btn-container">
            <button> Technical Specs</button>
            <button className="btn2" onClick={handleOpenExterior}>
              {" "}
              Build Your Exterior
            </button>
          </div>
        )}
      </div>
      {openExterior && (
        <>
          <p className="blue-para ">
            {textPara.slice(0, 150)}... <br />
            <a className="show-more" href="www.nowhere.com">
              {" "}
              Show more
            </a>
          </p>
          <div className="">
            <ColorPicker handleChangeCar={handleChangeCar} />
            <Wheels />
          </div>
        </>
      )}
    </div>
  );
};

export default InteriorCards;
