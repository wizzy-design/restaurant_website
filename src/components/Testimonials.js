import styled from "styled-components";
import TweetCards from "./TweetCards";
import one from "../img/testimonials/1.jpg";
import two from "../img/testimonials/2.jpg";
// import three from "../img/testimonials/3.jpg";
import four from "../img/testimonials/4.jpg";
// import five from "../img/testimonials/5.jpg";

const Testimonials = () => {
  return (
    <Testemony>
      <div className="my-title">
        <h3>Testimonials</h3>
        <h2>Some Feedbacks</h2>
      </div>

      <div className="cards">
        <TweetCards name="Wisdom Ochei" job="Head Chef" img={four} />
        {/* <TweetCards name="Daniel David" job="Designer cook" img={five} /> */}
        <TweetCards name="Mrs Baluu" job="Food specialist" img={one} />
        <TweetCards name="Chi chi" job="Food specialist" img={two} />
        {/* <TweetCards name="Daniel David" job="Food specialist" img={three} /> */}
      </div>
    </Testemony>
  );
};

const Testemony = styled.div`
  padding: 3rem 6rem 5rem 6rem;
  background-color: #0c1023; // #191f3a

  .cards{
    display: flex;
    width: 100%;
  }
`;

export default Testimonials;
