import CardHeader from "../CardHeader";
import CardListItem from "../CardListItem";
import ColorPicker from "../ColorPicker";
import Wheels from "../Wheels/Wheels";
import textPara from "../../assets/Text";

const InteriorCards = ({
  openExterior,
  openInterior,
  handleOpenExterior,
  handleChangeCar,
  handleOpenTechnical,
}) => {
  return (
    <div className="right-items">
      <div className="card-wrapper">
        <CardHeader openInterior={openInterior} openExterior={openExterior} />
        <ul>
          <CardListItem
            milesDes={"Exterior Colors & Wheels"}
            rangeEpa={""}
            performance={
              "282 mi** (AMCI Testing Range) w/ Performance Battery Plus"
            }
          />
          <CardListItem
            milesDes={"Exterior Options | Technology"}
            rangeEpa={"No option selected"}
            performance={
              "Assistance Systems w/ Performance Battery Plus"
            }
          />
        </ul>
        {!openInterior && (
          <div className="flex btn-container">
            {!openExterior && (
              <button onClick={handleOpenTechnical}>Technical Specs</button>
            )}
            <button className="btn2" onClick={handleOpenExterior}>
              {" "}
              {openExterior ? "Close " : ""}Build Your Exterior
            </button>
          </div>
        )}
      </div>
      {openExterior && (
        <>
          <p className="blue-para ">
            {textPara}... <br />
            <span className="show-more"> Show more</span>
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
