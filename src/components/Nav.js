import styled from "styled-components";
import logo from "../img/logo.png";
// Link
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleClick = () => {
    setScrolled(true);
  };

  return (
    <Root scrolled={scrolled}>
      <div>
        <Link to="home">
          <img src={logo} alt="The logo" />
        </Link>
      </div>

      {/* <Burger>
        <span></span>
      </Burger> */}

      <Navv scrolled={scrolled}>
        <ul>
          <li className="nav-item" onClick={handleClick}>
            <Link to="about">About</Link>
          </li>
          <li className="nav-item" onClick={handleClick}>
            <Link to="menu" offset={-30}>
              Menu
            </Link>
          </li>
          <li className="nav-item" onClick={handleClick}>
            <Link to="testimonials" offset={-30}>
              Testimonials
            </Link>
          </li>
          <li className="nav-item" onClick={handleClick}>
            <Link to="team" offset={-30}>
              Team
            </Link>
          </li>
          <li className="nav-item" onClick={handleClick}>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </Navv>
    </Root>
  );
};

// Styled components
const Root = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 1.5rem 10rem;
  background-color: ${({ scrolled }) => (scrolled ? "#0c1023" : "transparent")};
  transition: background-color 0.3s ease-in-out;

`;

// const Burger = styled.button`
// `;

const Navv = styled.nav`
  ul {
    display: flex;
    list-style-type: none;

    li {
      text-decoration: none;
      color: rgb(187, 183, 183);
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      margin: 0 1rem;
      cursor: pointer;
      transition: all 0.2s ease;
      border-bottom: ${({ scrolled }) =>
        scrolled ? ".1px dotted #eaa023" : "none"};

      &:hover {
        font-weight: 600;
        color: #fff;
      }
    }
  }
`;

export default Nav;
