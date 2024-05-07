import Wheel1 from "../assets/images/wheels1.webp";
import Wheel2 from "../assets/images/wheels2.webp";
import Wheel3 from "../assets/images/wheel3.webp";

export default function Wheels(){
    return(
        <>
        <div className="b-container">
          <div className="Title">Wheels</div>
          <div className="flex">
            <div className="wheel-div">
              <div><img src={Wheel1} alt="wheel"/></div>
              <div>standard equipment</div>
              <p>19" Taycan S Aero Wheels</p>
            </div>
            <div>
              <div><img src={Wheel2} alt="wheel"/></div>
              <div>standard equipment</div>
              <p>19" Taycan S Aero Wheels</p>
            </div>
            <div>
              <div><img src={Wheel3} alt="wheel"/></div>
              <div>standard equipment</div>
              <p>19" Taycan S Aero Wheels</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <div><img src={Wheel2} alt="wheel"/></div>
              <div>standard equipment</div>
              <p>19" Taycan S Aero Wheels</p>
            </div>
            <div>
              <div><img src={Wheel2} alt="wheel"/></div>
              <div>standard equipment</div>
              <p>19" Taycan S Aero Wheels</p>
            </div>
            <div>
              <div><img src={Wheel2} alt="wheel"/></div>
              <div>standard equipment</div>
              <p>19" Taycan S Aero Wheels</p>
            </div>
          </div>
        </div>
        </>
    )
}