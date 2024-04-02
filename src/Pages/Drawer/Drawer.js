import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Drawer.css";

const Drawer = ({ onClose, colors }) => {
  return (
    <div className="drawerContainer">
      <div className="container">
        {/* top text and close icon */}
        <div className="flexRow">
          {/* top text */}
          <h1>Creative Creation</h1>

          {/* close icon */}
          <div className="closeIcon" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </div>
        </div>

        {/* input areas */}
        <div>
          {/* title */}
          <div>
            <h3>title</h3>

            {/* input */}
            <div>
              <input
                type="text"
                placeholder="Enter title"
                className="textField"
              />
            </div>
          </div>

          {/* subtitle */}
          <div>
            <h3>subtitle</h3>

            {/* input */}
            <div>
              <input
                type="text"
                placeholder="Enter subtitle"
                className="textField"
              />
            </div>
          </div>
        </div>

        {/* color */}
        <div>
          {/* text */}
          <h3>background color</h3>

          {/* display colors */}
          <div className="colorDisplay">
            {colors.map((color, index) => (
              <div
                key={index}
                className="colorCircle"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* done button */}
        <div>
          <button className="doneButton">Done</button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
