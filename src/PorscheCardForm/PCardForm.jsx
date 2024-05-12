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
          <p>Exterior Colors</p> <span>expand</span>
        </div>
      )}
      {<img src={newCarColor} alt="interior" />}
      {!openExterior && (
        <div className="flex btn-container">
          <button> Technical Specs</button>
          <button className="btn2" onClick={handleOpenInterior}>
            {openInterior ? "Close " : null}Build Your Interior
          </button>
        </div>
      )}
    </div>
  );
}
