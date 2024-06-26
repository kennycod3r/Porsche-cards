import { useEffect, useState } from "react";
import TechnicalSpecs from "./TechnicalSpecs/TechnicalSpecs";
import PCardForm from "../PorscheCardForm/PCardForm";
import InteriorCards from "./Interior/InteriorCard";
import interior from "../assets/images/interior.webp";
import BlackPorsche from "../assets/images/blackPorshe.webp";
import BluePorsche from "../assets/images/BluePorsche.webp";
import WhitePorsche from "../assets/images/silverPorshe2.webp";

export default function Porche() {
  const [openExterior, setOpenExterior] = useState(false);
  const [openTechnical, setOpenTechnical] = useState(false);
  const [openInterior, setOpenInterior] = useState(false);
  const [newCarColor, setNewCarColor] = useState(interior);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenInterior = () => setOpenInterior((prevState) => !prevState);

  const handleChangeCar = (color) => {
    try {
      switch (color) {
        case "white":
          setNewCarColor(WhitePorsche);
          break;
        case "black":
          setNewCarColor(BlackPorsche);
          break;
        case "darkblue":
          setNewCarColor(BluePorsche);
          break;
        default:
          setNewCarColor(BlackPorsche);
          break;
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleOpenExterior = () => {
    setOpenTechnical(false);
    setOpenExterior((prevState) => !prevState);
  };
  const handleOpenTechnical = () => setOpenTechnical((prevState) => !prevState);

  useEffect(() => {
    setNewCarColor(openExterior ? BlackPorsche : interior);
  }, [openExterior]);

  return (
    <div className={`container ${windowWidth < 760 ? "flip-container" : "no-flip"}`}>
      <InteriorCards
        openExterior={openExterior}
        openInterior={openInterior}
        handleChangeCar={handleChangeCar}
        handleOpenExterior={handleOpenExterior}
        handleOpenTechnical={handleOpenTechnical}
      />
      {!openTechnical ? (
        <PCardForm
          handleOpenInterior={handleOpenInterior}
          openExterior={openExterior}
          openInterior={openInterior}
          newCarColor={newCarColor}
        />
      ) : (
        <TechnicalSpecs />
      )}
    </div>
  );
}
