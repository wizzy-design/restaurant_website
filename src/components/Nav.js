import styled from "styled-components";
import logo from "../img/logo.png";
// Link
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Root>
      <Logo>
        {/* <Link to="#"> */}
        <img src={logo} alt="The logo" />
        {/* </Link> */}
      </Logo>

      <Burger>
        <span></span>
      </Burger>

      <Navv>
        <ul>
          <li className="nav-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="nav-item">
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li className="nav-item">
            <Link to="/team">Team</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Navv>
    </Root>
  );
};

// Styled components
const Root = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: black;
`;

const Logo = styled.div`
  background-color: black;
`;

const Burger = styled.button`
  display: flex;
  height: 34px;
  width: 44px;
  margin-right: 15px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  align-items: center;
  justify-content: center;

  span {
    height: 2px;
    width: 30px;
    display: block;
    background-color: white;
    position: relative;
  }

  span::before,
  span::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: white;
  }

  span::before {
    transform: translateY(-8px);
  }

  span::after {
    transform: translateY(8px);
  }
`;

const Navv = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 280px;
  background-color: #191f3a;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  padding: 80px 0 40px;
`;

export default Nav;
