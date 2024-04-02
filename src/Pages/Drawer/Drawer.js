import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Drawer.css";

const Drawer = ({ onClose, colors }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  // Function to handle changes in title input
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // Function to handle changes in subtitle input
  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };

  // Function to handle color selection
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  // Function to determine if all inputs are filled
  const areInputsFilled = () => {
    return (
      title.trim() !== "" && subtitle.trim() !== "" && selectedColor !== null
    );
  };

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
                value={title}
                onChange={handleTitleChange}
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
                value={subtitle}
                onChange={handleSubtitleChange}
              />
            </div>
          </div>
        </div>

        {/* color */}
        <div>
          {/* text */}
          <h3>background color</h3>

          {/* display color selection */}
          <div className="colorDisplay">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`colorCircle ${
                  selectedColor === color ? "selected" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </div>
        </div>

        {/* done button */}
        <div>
          <button
            className="doneButton"
            onClick={onClose}
            disabled={!areInputsFilled()}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
