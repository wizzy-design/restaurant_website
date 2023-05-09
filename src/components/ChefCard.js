import styled from "styled-components";

const ChefCard = (props) => {
  return (
    <Card>
      <div className="img">
        <img src={props.img} alt="Chef" />
      </div>
      <div className="tag-bar">
        <h3>{props.name}</h3>
        <h4>{props.role}</h4>
      </div>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;

  .img {
    img {
      border-radius: 6px;
      max-height: 417px;
      max-width: 338px;
    }
  }

  .tag-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 90%;
    width: 90%;
    border-radius: 8px;
    padding: 0.5rem 0;
    background-color: #191f3a;

    h3,
    h4 {
      font-family: "Poppins", sans-serif;
    }

    h3 {
      color: white;
    }

    h4 {
      color: #c8c8c8;
    }

    h4 {
      padding: 0.4rem 0;
      font-size: 0.9rem;
      font-weight: lighter;
    }
  }
`;

export default ChefCard;
