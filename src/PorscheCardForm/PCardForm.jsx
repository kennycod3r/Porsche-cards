import keyssvg from "../assets/keys.svg";
import Calculate from "../components/CalculatePayment/Calculate";
export default function PCardForm({
  handleOpenInterior,
  openExterior,
  openInterior,
  newCarColor,
}) {
  return (
    <div className="interior">
      {openExterior && (
        <div className="b-expand-headers fsb">
          <p>Porsche 911</p> <span style={{ fontWeight: "200" }}>expand</span>
        </div>
      )}
      <Calculate/>
      {<img className="interior-img" src={newCarColor} alt="interior" />}
      {!openExterior && (
        <div className="flex btn-container">
          {!openInterior && <button> Technical Specs</button>}
          <button className="btn2" onClick={handleOpenInterior}>
            {openInterior ? "Close " : ""}Build Your Interior
          </button>
        </div>
      )}
      {openExterior && (
        <>
          <div className="speedometer fC">
            <img src={keyssvg} alt="speed" />
          </div>
        </>
      )}
    </div>
  );
}
