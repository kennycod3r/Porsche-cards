import calculator from "../../assets/calculator.svg";

export default function Calculate() {
    return(
        <>
        <ul className="white-overlay calculate">
          <li>
            <div>
              <img src={calculator} alt="speed" />
            </div>
            <p> calculate payment <br/><b>$120,000</b></p>
          </li>
        </ul>
        </>
    )
}