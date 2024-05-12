import Wheel1 from "../../assets/images/wheels1.webp";
import Wheel2 from "../../assets/images/wheels2.webp";
import Wheel3 from "../../assets/images/wheel3.webp";
import WheelComponent from "./WheelComponent";

export default function Wheels() {
  return (
    <>
      <div className="b-container">
        <div className="Title">Wheels</div>
        <div className="flex">
          <WheelComponent
            imageUrl={Wheel1}
            text={`19" Taycan S Aero Wheels`}
            price={"$1300"}
          />
          <WheelComponent
            imageUrl={Wheel2}
            text={`19" Taycan S Aero Wheels`}
            price={"$1800"}
          />
          <WheelComponent
            imageUrl={Wheel3}
            text={`19" Taycan S Aero Wheels`}
            price={"$2000"}
          />
        </div>

        <div className="flex">
          <WheelComponent
            imageUrl={Wheel2}
            text={`19" Taycan S Aero Wheels`}
            price={"sold Out"}
          />
          <WheelComponent
            imageUrl={Wheel2}
            text={`19" Taycan S Aero Wheels`}
            price={"sold Out"}
          />
          <WheelComponent
            imageUrl={Wheel2}
            text={`19" Taycan S Aero Wheels`}
            price={"sold Out"}
          />
        </div>
      </div>
    </>
  );
}
