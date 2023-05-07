import { useState } from "react";
import styled from "styled-components";
// Components
import FoodItem from "./FoodItem";
// Images
import one from "../img/menu/1.jpg";
import two from "../img/menu/2.jpg";
import three from "../img/menu/3.jpg";
import four from "../img/menu/4.jpg";
import five from "../img/menu/5.jpg";
import six from "../img/menu/6.jpg";
import seven from "../img/menu/7.jpg";
import eight from "../img/menu/8.jpg";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("lunch");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Menuu>
      <div className="menu-title">
        <h3>Order Now</h3>
        <h2>Our Menu</h2>
      </div>
      <div className="menu-tabs">
        <button
          onClick={() => handleTabClick("lunch")}
          className={`${activeTab === "lunch" ? "active" : ""}`}
        >
          Lunch
        </button>
        <button
          onClick={() => handleTabClick("dinner")}
          className={`${activeTab === "dinner" ? "active" : ""}`}
        >
          Dinner
        </button>
        <button
          onClick={() => handleTabClick("drinks")}
          className={`${activeTab === "drinks" ? "active" : ""}`}
        >
          Drinks
        </button>
        <button
          onClick={() => handleTabClick("desserts")}
          className={`${activeTab === "desserts" ? "active" : ""}`}
        >
          Desserts
        </button>
      </div>
      /,
      <div className="menu-contents">
        {/* Lunch Menu */}
        {activeTab === "lunch" && (
          <div className="menu-content" id="lunch">
            <div className="first-column">
              <FoodItem image={one} meal="Lunch" />
              <FoodItem image={two} meal="Lunch" />
              <FoodItem image={three} meal="Lunch" />
              <FoodItem image={four} meal="Lunch" noBorder={true} />
            </div>
            <div className="second-column">
              <FoodItem image={five} meal="Lunch" />
              <FoodItem image={six} meal="Lunch" />
              <FoodItem image={seven} meal="Lunch" />
              <FoodItem image={eight} meal="Lunch" noBorder={true} />
            </div>
          </div>
        )}

        {/* Dinner Menu */}
        {activeTab === "dinner" && (
          <div className="menu-content" id="dinner">
            <div className="first-column">
              <FoodItem image={four} meal="Dinner" />
              <FoodItem image={one} meal="Dinner" />
              {/* <FoodItem image={three} meal="Dinner" /> */}
              <FoodItem image={two} meal="Dinner" noBorder={true} />
            </div>
            <div className="second-column">
              <FoodItem image={six} meal="Dinner" />
              <FoodItem image={five} meal="Dinner" noBorder={true} />
              {/* <FoodItem image={seven} meal="Dinner" /> */}
              {/* <FoodItem image={eight} meal="Dinner" noBorder={true} /> */}
            </div>
          </div>
        )}

        {/* Drinks Menu */}
        {activeTab === "drinks" && (
          <div className="menu-content" id="drinks">
            <div className="first-column">
              {/* <FoodItem image={four} meal="Drink" /> */}
              <FoodItem image={one} meal="Drink" />
              <FoodItem image={three} meal="Drink" />
              <FoodItem image={two} meal="Drink" noBorder={true} />
            </div>
            <div className="second-column">
              {/* <FoodItem image={six} meal="Drink" /> */}
              <FoodItem image={five} meal="Drink" />
              <FoodItem image={seven} meal="Drink" noBorder={true} />
              {/* <FoodItem image={eight} meal="Drink" noBorder={true} /> */}
            </div>
          </div>
        )}

        {/* Desserts Menu */}
        {activeTab === "desserts" && (
          <div className="menu-content" id="desserts">
            <div className="first-column">
              {/* <FoodItem image={four} meal="Desserts" /> */}
              <FoodItem image={one} meal="Desserts" />
              {/* <FoodItem image={three} meal="Desserts" /> */}
              <FoodItem image={two} meal="Desserts" noBorder={true} />
            </div>
            <div className="second-column">
              <FoodItem image={five} meal="Desserts" />
              <FoodItem image={seven} meal="Desserts" noBorder={true} />
              {/* <FoodItem image={six} meal="Desserts" /> */}
              {/* <FoodItem image={eight} meal="Desserts" noBorder={true} /> */}
            </div>
          </div>
        )}
      </div>
    </Menuu>
  );
};

const Menuu = styled.div`
  padding: 3rem 6rem 5rem 6rem;
  background-color: #0c1023; // #191f3a

  .menu-title {
    padding: 0 0 3rem 0;
    h2 {
      font-family: "Poppins", sans-serif;
      text-align: center;
      font-size: 35px;
    }

    h3 {
      color: #eaa023;
      font-family: "Dancing Script", cursive;
      font-size: 1.5rem;
      text-align: center;
    }
  }

  .menu-tabs {
    padding: 0 15px;
    width: 100%;
    text-align: center;
    margin-bottom: 30px;

    button {
      font-size: 1.2rem;
      font-family: "Poppins", sans-serif;
      text-transform: capitalize;
      border: none;
      background-color: transparent;
      font-weight: 500;
      cursor: pointer;
      margin: 0 10px 10px;
      transition: color 0.3s ease;
      color: white;
      transition: all .1s ease;

      &:hover {
        color: #eaa023;
      }
    }

    button.active {
      color: #eaa023;
    }
  }

  .menu-contents {
    margin: 2rem 0;

    .menu-content {
      display: flex;
      gap: 2rem;

      .first-column,
      .second-column {
        width: 50%;
      }
    }
  }
`;

export default Menu;
