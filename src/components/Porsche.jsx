import { useState } from "react";
import PorscheCards from "./PorscheCard";
import Dialog from "./Dialog";
//import PaymentCalculator from "./PaymentCalculator";
import BuildPorsche from "./BuildPorsche";
import CarSvg from "../assets/carSvg.svg";

export default function Porche() {
  //<PaymentCalculator/>
  const [openDialog, setOpenDialog] = useState(false);
  const [openBuild, setOpenBuild] = useState(false);

  function handleOpenBuild() {
    setOpenBuild((prevState) => !prevState);
  }
  return (
    <>
      <div className="container">
        <PorscheCards handleOpenBuild={handleOpenBuild} />
        {openBuild ? (
          <>
            <PorscheCards />
            <PorscheCards />
          </>
        ) : (
          <BuildPorsche />
        )}

        <div className="garage" onClick={() => setOpenDialog(!openDialog)}>
          Garage: 0
        </div>
        <div className="garage" onClick={() => setOpenDialog(!openDialog)}>
          Calculate payment
        </div>
        <div className="price-Area">
          <div>
            <img src={CarSvg} alt="carSvg" />
          </div>
          <div>
            <p>find a Dealer <br/>
            <span>$160,000</span>
            </p>
            
          </div>
        </div>
        {openDialog ? <Dialog /> : null}
      </div>
    </>
  );
}
