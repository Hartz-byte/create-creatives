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
    if (creatives.length < 5) {
      setCreatives((prevCreatives) => [
        ...prevCreatives,
        { title, subtitle, color: selectedColor },
      ]);
    }
  };

  return (
    <>
      <main className="mainContainer">
        {/* filter by text */}
        <header>
          <h1>Filter By</h1>
        </header>

        {/* color and title/subtitle section */}
        <section className="flexDisplay">
          {/* color section */}
          <section>
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
          </section>

          {/* title / subtitle section */}
          <section>
            <h3>title / subtitle:</h3>

            <div>
              <input
                type="text"
                placeholder="Search across title and subtitle"
                className="inputField"
              />
            </div>
          </section>
        </section>

        {/* process bar */}
        <section className="processContainer">
          {/* bar */}
          <div className="processBarContainer">
            <div
              className="processBarFill"
              style={{
                width: `${(creatives.length / 5) * 100}%`,
              }}
            />
          </div>

          {/* count text */}
          <div>
            <h3>{creatives.length} / 5 Creatives</h3>
          </div>
        </section>

        {/* + add creative button  */}
        <div>
          <button
            className="addButton"
            onClick={toggleDrawer}
            disabled={isDrawerOpen || creatives.length === 5}
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
            <h1>{creative.title}</h1>
            <h3>{creative.subtitle}</h3>
          </div>
        ))}
      </main>
    </>
  );
};

export default MainPage;
