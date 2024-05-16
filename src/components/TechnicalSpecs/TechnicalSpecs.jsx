import Iris from "../../assets/images/iris.webp";
import speed from "../../assets/speed.svg";
import engine from "../../assets/engine.svg";
import cylinder from "../../assets/cylinder.svg";
import porscheBlack from "../../assets/porscheBlack.svg";
import porscheWhite from "../../assets/porscheWhite.svg";

export default function TechnicalSpecs() {
  return (
    <div>
      <div className="tSpecs-img">
        <img src={Iris} alt="carbig" />
        <div className="titleLogo2 flex">
          <img src={porscheBlack} alt="speed" />
        </div>
        <ul className="white-overlay">
          <li>
            <div>
              <img src={speed} alt="speed" />
            </div>
            <p> 0-60mph (4.2s) acceleration</p>
          </li>
          <li>
            <div>
              <img src={cylinder} alt="speed" />
            </div>
            <p> Doppelkupplung (PDK) transmission</p>
          </li>
          <li>
            <div>
              <img src={engine} alt="speed" />
            </div>
            <p>six-cylinder, Powerful twin-turbo</p>
          </li>
        </ul>
      </div>
      <div className="text-area">
        <div className="titleLogo flex">
          <img src={porscheWhite} alt="speed" />
        </div>
        <p>
          <b>Timeless design, contemporary interpretation. </b>
          <br />
          <br /> The shape of the 911 Carrera is unmistakable because of its
          iconic flyline and elegant roof lines. These have characterized
          Porsche since 1963, as have sports cars with astonishing performance.
        </p>
      </div>
    </div>
  );
}
