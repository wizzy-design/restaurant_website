import styled from "styled-components";
import logo from "../img/logo.png";
// Link
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [opened, setOpened] = useState(false);

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

  const handleBurgerClick = () => {
    setOpened(!opened);
  };

  return (
    <Root scrolled={scrolled} opened={opened}>
      <div className="logo">
        <Link to="home">
          <img src={logo} alt="The logo" />
        </Link>
      </div>

      <div className="button">
        <button className="burger" onClick={handleBurgerClick}>
          <span></span>
        </button>
      </div>

      <Navv scrolled={scrolled} opened={opened}>
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

  .logo {
    cursor: pointer;
  }

  .burger {
    display: none;
  }

  @media (max-width: 1024px) {
    align-items: flex-start;

    .burger {
      display: flex;
      height: 34px;
      width: 44px;
      margin-right: 15px;
      border: none;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background-color: transparent;
      position: absolute;
      z-index: 90;
      right: ${({ opened }) => (opened ? "20%" : "none")};

      span {
        display: block;
        position: relative;
        height: 2px;
        width: 30px;
        background-color: ${({ opened }) => (opened ? "transparent" : "#fff")};
      }

      span::before,
      span::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: #fff;
      }

      span::before {
        transform: ${({ opened }) =>
          opened ? "rotate(-45deg)" : "translateY(8px)"};
        transition: transform 0.5s ease;
      }

      span::after {
        transform: ${({ opened }) =>
          opened ? "rotate(45deg)" : "translateY(-8px)"};
        transition: transform 0.5s ease;
      }
    }
  }

  @media (max-width: 751px) {
    padding: 1.5rem 5rem;
    .burger {
      right: ${({ opened }) => (opened ? "30%" : "none")};
    }
  }
`;

const Navv = styled.nav`
  ul {
    display: flex;
    list-style-type: none;

    li {
      text-decoration: none;
      color: rgb(232, 228, 228);
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      margin: 0 1rem;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        font-weight: 600;
        color: #fff;
        border-bottom: 1px solid #eaa023;
      }
    }
  }

  @media (max-width: 1024px) {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 280px;
    background-color: #191f3a;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
    overflow-y: auto;
    transition: all 0.5s ease;
    transform: ${({ opened }) =>
      opened ? "translateX(0%)" : "translateX(100%)"};
    transition: transform 0.5s ease;

    ul {
      flex-direction: column;
      padding: 10rem 2rem;

      li {
        font-size: 2rem;
        line-height: 6rem;
      }
    }
  }
`;

export default Nav;
