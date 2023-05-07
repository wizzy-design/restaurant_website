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
  return (
    <Menuu>
      <div className="menu-title">
        <h3>Order Now</h3>
        <h2>Our Menu</h2>
      </div>

      <div className="menu-tabs">
        <button className="active">Lunch</button>
        <button>Dinner</button>
        <button>Drinks</button>
        <button>Desserts</button>
      </div>

      <div className="menu-contents">
        <div className="menu-content" id="lunch">
          <div className="first-column">
            <FoodItem image={one} />
            <FoodItem image={two} />
            <FoodItem image={three} />
            <FoodItem image={four} noBorder={true}/>
          </div>
          <div className="second-column">
            <FoodItem image={five} />
            <FoodItem image={six} />
            <FoodItem image={seven} />
            <FoodItem image={eight} noBorder={true}/>
          </div>
        </div>
        {/* <div className="menu-content" id="dinner"></div>
        <div className="menu-content" id="drinks"></div>
        <div className="menu-content" id="desserts"></div> */}
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
      color: white;
      cursor: pointer;
      margin: 0 10px 10px;
      transition: color 0.3s ease;

      &:hover {
        color: #eaa023;
      }
    }
    button.active {
      color: #eaa023;
    }
  }

  .menu-contents{
    margin: 2rem 0;
    .menu-content{
      display: flex;
      gap: 2rem;

      .first-column,
      .second-column{
        width: 50%;
      }
    }
  }
`;

export default Menu;
