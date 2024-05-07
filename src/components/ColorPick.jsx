export default function ColorPicker(){
    const white = "whitesmoke";
    const black = "#181818";
    return(
        <div className="b-container">
          <h2 className="Title">Exterior Colors</h2>
          <div className="fsb">
            <h2 className="sub-Title">Standard Color</h2> <div>$0</div>
          </div>
          <div className="flex color-box">
            <div className="inner-color-box">
              <div className="color" style={{ backgroundColor: white }}></div>
              <p>white</p>
            </div>
            <div className="inner-color-box">
              <div className="color" style={{ backgroundColor: black }}></div>
              <p>Black</p>
            </div>
          </div>

          <div>
            <div className="fsb">
              <h2 className="sub-Title">Metalic Color</h2> <div>$0</div>
            </div>

            <div className="flex color-box">
              <div className="inner-color-box">
                <div className="color" style={{ backgroundColor: black }}></div>
                <p>jet Black</p>
              </div>
              <div className="inner-color-box">
                <div className="color" style={{ backgroundColor: black }}></div>
                <p>gen Blue</p>
              </div>
              <div className="inner-color-box">
                <div className="color" style={{ backgroundColor: black }}></div>
                <p>Volcano Grey</p>
              </div>
            </div>
            <div className="flex color-box">
              <div className="inner-color-box">
                <div className="color" style={{ backgroundColor: black }}></div>
                <p>jet Black</p>
              </div>
              <div className="inner-color-box">
                <div className="color" style={{ backgroundColor: black }}></div>
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