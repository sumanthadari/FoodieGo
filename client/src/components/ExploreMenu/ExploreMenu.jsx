import React from "react";
import "./ExploreMenu.css";
import { useState, useEffect } from "react";

const ExploreMenu = ({ category, setCategory }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Function to fetch data from the backend

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  // Empty dependency array to ensure the effect runs only once

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/menuList"); // Assuming your API endpoint is '/api/items'
      setItems(await response.json());
      // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    console.log("item are of size", items.length);
  };
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose our a diverse menu featuring a deletable array of dishes
      </p>
      <div className="explore-menu-list">
        {items.length > 0 ? (
          items?.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.name ? "All" : item.name
                  )
                }
                key={index}
                className="explore-menu-list-item"
              >
                <img
                  className={category === item.name ? "active" : ""}
                  src={item?.image}
                  alt={item?.name}
                />
                <p>{item?.name}</p>
              </div>
            );
          })
        ) : (
          <li>No foods available</li>
        )}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
