import React, { useState, useEffect } from "react";
import axios from "axios";
import Drawer from "../Drawer/Drawer";
import "./MainPage.css";

const MainPage = () => {
  const [colors, setColors] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [creatives, setCreatives] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://random-flat-colors.vercel.app/api/random?count=5"
        );
        setColors(response.data.colors);
      } catch (error) {
        console.error("Error fetching the API:", error);
      }
    };

    fetchData();
  }, []);

  // function to toggle drawer component
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // function to create creatives
  const saveCreative = ({ title, subtitle, selectedColor }) => {
    setCreatives((prevCreatives) => [
      ...prevCreatives,
      { title, subtitle, color: selectedColor },
    ]);
  };

  return (
    <>
      <div className="mainContainer">
        {/* filter by text */}
        <h1>Filter By</h1>

        {/* color and title/subtitle section */}
        <div className="flexDisplay">
          {/* color section */}
          <div>
            <h3>color</h3>

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

          {/* title / subtitle section */}
          <div>
            <h3>title / subtitle:</h3>

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
          {/* bar */}
          <div className="processBar" />

          {/* count text */}
          <div>
            <h3>0 / 5 Creatives</h3>
          </div>
        </div>

        {/* + add creative button  */}
        <div>
          <button
            className="addButton"
            onClick={toggleDrawer}
            disabled={isDrawerOpen}
          >
            + Add Creative
          </button>
        </div>

        {/* conditional drawer open close */}
        {isDrawerOpen && (
          <Drawer
            onClose={toggleDrawer}
            colors={colors}
            onSave={saveCreative}
          />
        )}

        {/* creatives */}
        {creatives.map((creative, index) => (
          <div
            key={index}
            className="creativeItem"
            style={{ backgroundColor: creative.color }}
          >
            <h3>{creative.title}</h3>
            <h5>{creative.subtitle}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainPage;
