// Drawer.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Drawer.css";

const Drawer = ({ onClose, colors, onSave }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  // title change handle
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // subtitle change handle
  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };

  // color change handle
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  // checking if the inputs and color selection are empty or not
  const areInputsFilled = () => {
    return (
      title.trim() !== "" && subtitle.trim() !== "" && selectedColor !== null
    );
  };

  // save inputs and color data
  const handleSave = () => {
    onSave({ title, subtitle, selectedColor });
    onClose();
  };

  return (
    <main className="drawerContainer">
      <main className="container">
        {/* top text and close icon */}
        <div className="flexRow">
          {/* text */}
          <h1>Creative Creation</h1>

          {/* close icon */}
          <div className="closeIcon" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </div>
        </div>

        {/* title and subtitle inputs */}
        <section>
          {/* title input */}
          <section>
            <h3>title</h3>

            <div>
              <input
                type="text"
                placeholder="Enter title"
                className="textField"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
          </section>

          {/* subtitle input */}
          <section>
            <h3>subtitle</h3>

            <div>
              <input
                type="text"
                placeholder="Enter subtitle"
                className="textField"
                value={subtitle}
                onChange={handleSubtitleChange}
              />
            </div>
          </section>
        </section>

        {/* color section */}
        <section>
          {/* text */}
          <h3>background color</h3>

          {/* color display button */}
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
        </section>

        {/* done button */}
        <div>
          <button
            className="doneButton"
            onClick={handleSave}
            disabled={!areInputsFilled()}
          >
            Done
          </button>
        </div>
      </main>
    </main>
  );
};

export default Drawer;
