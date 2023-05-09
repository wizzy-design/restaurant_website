import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const TweetCards = (props) => {
  return (
    <Tweet>
      <Header>
        <div className="titles">
          <h3>{props.name}</h3>
          <h4>{props.job}</h4>
        </div>

        <div className="img">
          <img src={props.img} alt="DP" />
        </div>
      </Header>

      <Body>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
          necessitatibus nulla quia, dolore quos voluptatum consequatur.
        </p>

        <div className="stars">
          <FontAwesomeIcon icon={faStar} className="yellow" />
          <FontAwesomeIcon icon={faStar} className="yellow" />
          <FontAwesomeIcon icon={faStar} className="yellow" />
          <FontAwesomeIcon icon={faStar} className="yellow" />
          <FontAwesomeIcon icon={faStar} className="yellow" />
        </div>
      </Body>
    </Tweet>
  );
};

const Tweet = styled.div`
  margin: 1rem;
  padding: 1.5rem 1.2rem;
  border: 2px solid #191f3a;
  border-radius: 6px;
  width: 40%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;

  h3,
  h4 {
    font-family: 'Poppins', sans-serif;
    color: white;
  }

  h3{
    font-weight: 600;
  }

  h4{
    font-weight: lighter;
    font-size: .8rem;
  }

  .img{
    border: 5px solid #191f3a;
    max-width: 60px;
    border-radius: 40px;
    overflow: hidden;
  }
`;

const Body = styled.div`
  .stars {
    .yellow {
      color: #c4c42f;
    }
  }
`;

export default TweetCards;
