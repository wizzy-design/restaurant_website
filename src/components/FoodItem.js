import styled from "styled-components";

const FoodItem = (props) => {
  return (
    <Parent noBorder={props.noBorder}>
      <div className="img">
        <img src={props.image} alt="Food Pic" />
      </div>

      <div className="details">
        <p>Lunch Item</p>
        <p id="price">$40.00</p>
      </div>
    </Parent>
  );
};

const Parent = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 0;
  border-bottom: ${(props) =>
    props.noBorder ? "none" : "2px dashed #a2a09d1c"};

  &:hover {
    cursor: pointer;

    .details p {
      color: #eaa023;
    }
    .details #price {
      color: #b9b5b5;
    }
  }

  .img {
    img {
      width: 80px;
      height: 70px;
      border-radius: 10px;
      object-fit: cover;
      cursor: pointer;
    }
  }
  .details {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
      font-weight: 500;
      color: white;
      transition: ease 0.3s all;
    }

    #price {
      color: #eaa023;
    }
  }
`;

export default FoodItem;
