import React, { useState, useEffect } from "react";
import axios from "axios";
import Drawer from "../Drawer/Drawer";
import "./MainPage.css";

const MainPage = () => {
  const [colors, setColors] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // api call for colors data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://random-flat-colors.vercel.app/api/random?count=5"
        );
        // console.log(response.data.colors);
        setColors(response.data.colors);
      } catch (error) {
        console.error("Error fetching the api:", error);
      }
    };

    fetchData();
  }, []);

  // handle button click and toggle drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="mainContainer">
        {/* filter by text */}
        <h1>Filter By</h1>

        {/* color and title / subtitle input */}
        <div className="flexDisplay">
          {/* color */}
          <div>
            {/* text */}
            <h3>color</h3>

            {/* color display */}
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

          {/* title / subtitle input */}
          <div>
            {/* text */}
            <h3>title / subtitle:</h3>

            {/* input */}
            <div>
              <input
                type="text"
                placeholder="Search across title and subtitle"
                className="inputField"
              />
            </div>
          </div>
        </div>

        {/* process bar */}
        <div className="processContainer">
          {/* process bar */}
          <div className="processBar" />

          {/* process text */}
          <div>
            <h3>0 / 5 Creatives</h3>
          </div>
        </div>

        {/* add creative button */}
        <div>
          <button
            className="addButton"
            onClick={toggleDrawer}
            disabled={isDrawerOpen}
          >
            + Add Creative
          </button>
        </div>

        {/* render drawer component conditionally */}
        {isDrawerOpen && <Drawer onClose={toggleDrawer} colors={colors} />}
      </div>
    </>
  );
};

export default MainPage;
