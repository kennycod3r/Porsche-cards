export default function ColorPicker({handleChangeCar}){
   function logStuf(color){
    handleChangeCar(color);
   }



    const white = "whitesmoke";
    const black = "#181818";
    const pinkish = "#bca9ac";
    const blue = "#7ba7bc";
    const DarkBlue = "darkblue"
    return(
        <div className="b-container">
          <h2 className="Title">Exterior Colors</h2>
          <div className="fsb">
            <h2 className="sub-Title">Standard Color</h2> <b className="color-price">$0</b>
          </div>
          <div className="color-box">
            <div className="inner-color-box">
              <div className="color" style={{ backgroundColor: white }} onClick={() => logStuf("white")}></div>
              <p>white</p>
            </div>
            <div className="inner-color-box">
              <div className="color" style={{ backgroundColor: black }} onClick={() => logStuf("black")}></div>
              <p>Black</p>
            </div>
          </div>

          <div>
            <div className="fsb">
              <h2 className="sub-Title">Metalic Color</h2> <b className="color-price">$0</b>
            </div>

            <div className="color-box">
              <div className="inner-color-box">
                <div className="color" style={{ backgroundColor: pinkish }}></div>
                <p>jet Black</p>
              </div>
              <div className="inner-color-box">
                <div className="color" style={{ backgroundColor: DarkBlue }} onClick={() => logStuf("darkblue")}></div>
                <p>gen Blue</p>
              </div>
              <div className="inner-color-box">
                <div className="color" style={{ backgroundColor: black }}></div>
                <p>Volcano Grey</p>
              </div>
            </div>
            <div className="color-box">
              <div className="inner-color-box">
                <div className="color" style={{ backgroundColor: black }}></div>
                <p>jet Black</p>
              </div>
              <div className="inner-color-box">
                <div className="color" style={{ backgroundColor: blue }}></div>
                <p>gen Blue</p>
              </div>
              <div className="inner-color-box">
                <div className="color" style={{ backgroundColor: black }}></div>
                <p>Volcano Grey</p>
              </div>
            </div>
          </div>
        </div>

    )
}