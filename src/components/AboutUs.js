import styled, { keyframes } from "styled-components";
import experience from "../img/about-img.jpg";

const AboutUs = () => {
  return (
    <About>
      <div className="about-title">
        <h3>Our Story</h3>
        <h2>About Us</h2>
      </div>

      <div className="about-content">
        <div className="write-up">
          <h2>Welcome To Dine Restaurant</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            voluptas asperiores quaerat sit quia aspernatur dignissimos ratione
            id temporibus eum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. A, dolore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eos
            ipsam sint minus placeat quas possimus recusandae repudiandae vitae
            expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus, illum!
          </p>
          <button className="btn">Check Our Menu</button>
        </div>

        <div className="image">
          <h3>20+ Years Experience</h3>
          <img src={experience} alt="aboutPic" />
        </div>
      </div>
    </About>
  );
};

// Animation Keyframes

const spin = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

// Styled components

const About = styled.div`
  padding: 5rem 6rem;
  /* min-height: 100vh; */
  background-color: #0c1023; // #191f3a

  .about-title {
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

  .about-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .write-up {
      width: 70%;

      h2 {
        margin: 0 0 15px;
      }

      p {
        margin: 0 0 15px;
        width: 90%;
        max-width: 600px;
      }

      button {
        margin: 15px 0 0;
      }
    }

    .image {
      position: relative;
      max-width: 600px;
      width: 55%;

      img {
        border-radius: 15px;
      }

      h3 {
        width: 100%;
        position: absolute;
        text-align: center;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 300px;
        font-size: 1.7rem;
        font-family: "Dancing Script", cursive;
        color: #0c1023;
        font-weight: bold;
      }
    }

    .image::before {
      content: "";
      position: absolute;
      height: 100px;
      width: 100px;
      border: 3px solid #eaa023;
      left: calc(50% - 50px);
      top: calc(50% - 50px);
      animation: ${spin} 10s linear infinite;
    }
  }
`;

export default AboutUs;
