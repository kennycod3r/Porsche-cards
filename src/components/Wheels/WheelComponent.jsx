import CheckBox from "../Reuseable/CheckBox";

export default function WheelComponent({ imageUrl, price, text }) {
  return (
    <div>
      <div className="wheel-div-inner">
        <img src={imageUrl} alt="wheel" />
        <p className="wheel-price">{price}</p>
      </div>

      <div className="wheel-discription">
        <CheckBox />
        <div className="label-se">
          <b>standard equipment</b>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
