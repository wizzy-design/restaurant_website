import styled from "styled-components";
import ChefCard from "./ChefCard";
import wisdom from "../img/team/4.jpg";
import chichi from "../img/team/1.jpg";
import baluu from "../img/team/3.jpg";

const Team = () => {
  return (
    <Teamm>
      <div className="my-title">
        <h3>Team</h3>
        <h2>Our Chefs</h2>
      </div>

      <div className="chefs">
        <ChefCard name="Wisdom Ochei" role="Head Chef" img={wisdom} />
        <ChefCard name="Mrs Baluu Blu" role="Asst Head Chef" img={baluu} />
        <ChefCard name="Chef ChiChi" role="Exec Chef" img={chichi} />
      </div>
    </Teamm>
  );
};

const Teamm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 6rem 7rem 6rem;
  background-color: #0c1023;

  .chefs {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
  }

  @media (min-width: 848px) and (max-width: 1078px) {
    .chefs {
      flex-wrap: wrap;
      justify-content: flex-end;
    }
  }
  
  @media (max-width: 847px) {
    .chefs {
      flex-wrap: wrap;
      justify-content: flex-center;
    }
  }
`;

export default Team;
