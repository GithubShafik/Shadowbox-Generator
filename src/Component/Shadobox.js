import React, { useState, useRef } from "react";
import "./Shadobox.css";

const Shadobox = () => {
  const [x, setX] = useState(5);
  const [y, setY] = useState(2);
  const [blure, setBlure] = useState(9);
  const [color, setColor] = useState("#dcc7c7");
  const [bgcolor, setBgColor] = useState("#ffff");

  const [spread, setSpread] = useState(4);
  const [Cheked, setChecked] = useState(false);

  return (
    <>
      <div class="container text-center my-5">
        <div class="row  rounded p-5  column-gap-3">
          <h1 className="m-auto">Box Shadow CSS Generator</h1>
          <div class="col">
            <div className="controle p-5 my-3">
              <div className="d-flex ">
                <label className="col-6 ">x-axis ({x}) :</label>
                <input
                  type="range"
                  min={-50}
                  max={50}
                  class="form-range"
                  value={x}
                  onChange={(e) => setX(e.target.value)}
                />
              </div>

              <div className="d-flex  ">
                <label for="customRange1" class="form-label col-6">
                  y-axis ({y}):
                </label>
                <input
                  type="range"
                  min={-50}
                  max={50}
                  class="form-range"
                  value={y}
                  onChange={(e) => setY(e.target.value)}
                />
              </div>

              <div className="d-flex">
                <label for="customRange1" class="form-label col-6">
                  Spread ({spread}):
                </label>
                <input
                  type="range"
                  min={-50}
                  max={50}
                  class="form-range"
                  value={spread}
                  onChange={(e) => setSpread(e.target.value)}
                />
              </div>

              <div className="d-flex">
                <label for="customRange1" class="form-label col-6">
                  blure ({blure}) :
                </label>
                <input
                  type="range"
                  min={0}
                  max={50}
                  class="form-range"
                  value={blure}
                  onChange={(e) => setBlure(e.target.value)}
                />
              </div>

              <div>
                <label for="customRange1" class="form-label col-6 mx-2">
                  Color ({color}):
                </label>
                <input
                  type="color"
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>

              <div>
                <label for="customRange1" class="form-label col-6 mx-2">
                  bg-Color ({bgcolor}):
                </label>
                <input
                  type="color"
                  onChange={(e) => setBgColor(e.target.value)}
                />
              </div>

              <div>
                <div class="form-check form-switch d-flex">
                  <label class="form-check-label" for="flexSwitchCheckDefault ">
                    {Cheked ? "Outside" : "Inset"}
                  </label>

                  <input
                    class="form-check-input mx-2"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onChange={() => setChecked(!Cheked)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="result my-1">
              <div
                className="box"
                style={{
                  backgroundColor: `${bgcolor}`,
                  boxShadow: `${
                    Cheked ? "inset" : ""
                  }  ${x}px ${y}px ${blure}px ${spread}px  ${color}`,
                }}
              ></div>
            </div>
          </div>
          <div class="row border border-white p-2 bg-white ">
            <div class="col-12">
              <div class="input-group flex-nowrap">
                <button class="input-group-text btn" id="addon-wrapping">
                  Color Code
                </button>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  value={`
  background-color: (${bgcolor}) 
  box-shadow: (${x}px ${y}px ${blure}px ${spread}px ${color});`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shadobox;
