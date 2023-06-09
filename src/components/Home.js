import styled, { keyframes } from "styled-components";
import homeBg from "../img/home-bg.jpg";

const Home = ({ handleClick }) => {
  return (
    <Page imageUrl={homeBg}>
      <PageContent>
        <div className="write-ups">
          <h1>Dine Out Restaurant</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            excepturi nostrum placeat atque maxime?
          </p>
        </div>
        <button className="btn" onClick={handleClick}>
          Our Menu
        </button>
      </PageContent>
    </Page>
  );
};

// Animation Keyframes
const zoomInOut = keyframes`
    0%, 100%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.1);
    }
`;

// Styled components
const Page = styled.div`
  z-index: 1;
  position: relative;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(${(props) => props.imageUrl});
  animation: ${zoomInOut} 20s ease infinite;
  overflow: hidden;
`;

const PageContent = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: 100%;

  .write-ups {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 60px;
      font-family: "Dancing Script", cursive;
      line-height: 75px;
      margin: 0 0 5px;
    }

    p {
      text-align: center;
      width: 70%;
    }
  }

  @media (max-width: 767px) {
    .write-ups {
      h1 {
        font-size: 50px;
        line-height: 65px;
      }

      p {
        width: 75%;
      }
    }
  }
`;

export default Home;
