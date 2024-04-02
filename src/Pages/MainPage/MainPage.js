import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MainPage.css";
import Drawer from "../Drawer/Drawer";

const MainPage = () => {
  const [colors, setColors] = useState([]);

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

  return (
    <>
      <div className="mainContainer">
        {/* filter by text */}
        <h4 className="filterText">Filter By</h4>

        {/* color and title / subtitle input */}
        <div className="flexDisplay">
          {/* color */}
          <div>
            {/* text */}
            <h5 className="colorText">color:</h5>

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
            <h5 className="colorText">title / subtitle:</h5>

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

        {/* creatives process bar */}
        <div className="process">
          {/* process bar */}
          <div className="processBar" />

          {/* process text */}
          <div>
            <h5 className="processText">0 / 5 Creatives</h5>
          </div>
        </div>

        {/* add creative button */}
        <div>
          <button className="addButton">+ Add Creative</button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
