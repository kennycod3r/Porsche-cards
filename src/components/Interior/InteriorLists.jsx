import BlueInt from "../../assets/images/blueInt.webp";
import CheckBox from "../Reuseable/CheckBox";

export default function InteriorLists({ImageURL}) {
  return (
    <>
      <li >
        <div className="int-list">
          <img src={ImageURL} alt="bluelights" />
          <div className="check--absolute">
            <CheckBox />
          </div>
          <p>Heated GT Sport Steering Wheel with Trim in Matte Carbon Fiber</p>
          <span>$1200</span>
        </div>
      </li>
    </>
  );
}
