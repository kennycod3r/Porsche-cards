import BlackPorsche from "../assets/images/blackPorshe.webp";
import textPara from "../assets/Text";
import ColorPicker from "./ColorPick";

export default function BuildPorsche() {
  
  return (
    <>

        <div className="sticky">
        <h1 className="build-header-text">Taycan</h1>
          <div className="b-expand-headers fsb">
            <p>Exterior Colors</p> <span>expand</span>
          </div>

          <div className="b-car-img">
            <img src={BlackPorsche} alt="car" />
          </div>
        </div>

        <p className="blue-para small-screen">
          {textPara.slice(0, 150)}... <br />
          <a className="show-more" href="www.nowhere.com">
            {" "}
            Show more
          </a>
        </p>

        <div className="small-screen">
          <ColorPicker />
        </div>
      
    </>
  );
}
