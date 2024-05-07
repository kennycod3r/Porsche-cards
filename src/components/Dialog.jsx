import blackCarSide from "../assets/images/blackcarSide.webp";

export default function Dialog(){
    return(
        <dialog open>
        <div className="fc" style={{ flexDirection: "column" }}>
          <div>
            <img className="header-car-img" src={blackCarSide} alt="black-car"/>
          </div>
          <p>
            <b>Name</b>
          </p>
          <p>...</p>
          <button>save</button>
        </div>
      </dialog>
    )
}