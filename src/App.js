// Components
import GlobalStyle from "./components/GlobalStyle";
// import Nav from "./components/Nav";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { useRef } from "react";
// Styled-component
import styled from "styled-components";

//Router
// import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  // const location = useLocation();
  const menuRef = useRef(null);

  const handleClick = () => {
    menuRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Appp>
      <GlobalStyle />
      {/* <Nav /> */}
      <Home handleClick={handleClick} />
      <AboutUs />
      <Menu menuRef={menuRef} />
      <Testimonials />
      <Team />
      <Footer />

      {/* Router that navigates pages */}
      {/* <Routes location={location} key={location.pathname}>
        <Route path="/home" exact element={<Home />} />
        <Route path="/about" exact element={<AboutUs />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/testimonials" exact element={<Testimonials />} />
        <Route path="/team" exact element={<Team />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes> */}
    </Appp>
  );
}

const Appp = styled.div`
  overflow: hidden;
`;

export default App;
