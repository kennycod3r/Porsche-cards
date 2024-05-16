import checkedSvg from "../../assets/checked-tick.svg";
import { useState } from "react";
export default function CheckBox() {
  const [checkbox, setCheckbox] = useState(false);

  function handleCheck() {
    setCheckbox(!checkbox);
  }
  return (
    <>
        <div
          className={`${checkbox ? "checkbox--checked" : "checkbox"} fC smooth`}onClick={handleCheck}
        >
          {checkbox && (
            <img src={checkedSvg} alt="checked"/>
          )}
        </div>
    </>
  );
}
