import CardHeader from "./CardHeader";
import textPara from "../assets/Text";
import ColorPicker from "./ColorPick";
import Wheels from "./Wheels";
const PorscheCards = ({ handleOpenBuild }) => {
  console.log();
  return (
    <div className="flex right-items">
      <div className="card-wrapper">
        <CardHeader />
        <ul>
          <li className="card-list">
            <div>
              <h2>
                <b>208 mi**</b>
              </h2>
            </div>
            <div>
              <b>Driving Range Epa Estimate</b>
              <br />
              282 mi** (AMCI Testing Range) w/ Performance Battery Plus
            </div>
          </li>
          <li className="card-list">
            <div>
              <h2>
                <b>402 hp/ 300kW</b>
              </h2>
            </div>
            <div style={{ display: "none" }}>
              <b>Driving Range Epa Estimate</b>
              <br />
              282 mi** (AMCI Testing Range) w/ Performance Battery Plus
            </div>
          </li>
          <li className="card-list">
            <div>
              <h2>
                <b>5.1 s</b>
              </h2>
            </div>
            <div>0 - 60 mph with Launch Control</div>
          </li>
        </ul>

        <div className="flex btn-container">
          <button> Technical Specs</button>
          <button className="btn2" onClick={handleOpenBuild}>
            {" "}
            Build Your Porsche
          </button>
        </div>
      </div>
      {handleOpenBuild && (
        <p className="blue-para big-screen">
          {textPara.slice(0, 150)}... <br />
          <a className="show-more" href="www.nowhere.com">
            {" "}
            Show more
          </a>
        </p>
      )}
      {handleOpenBuild && (
        <>
          <div className="big-screen">
            <ColorPicker />
          </div>
          <Wheels />
        </>
      )}
    </div>
  );
};

export default PorscheCards;
