import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MainPage.css";

const MainPage = () => {
  const [colors, setColors] = useState([]);

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
    <div>
      <div className="mainContainer">
        {/* filter by text */}
        <h4 className="filter-text">Filter By</h4>

        {/* color */}
        <div>
          {/* text */}
          <h5 className="color-text">color:</h5>

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
      </div>
    </div>
  );
};

export default MainPage;
