import styled from "styled-components";
import footBg from "../img/footer-bg.jpg";
// After running npm install react-icons --save
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Footerr imgUrl={footBg}>
      <div className="footer-content">
        <div className="details">
          <div className="detail">
            <h3>Our Location</h3>
            <p>
              sesame street, sector 12, <br />
              Nigeria- 000 ***
            </p>
          </div>
          <div className="detail">
            <h3>Opening hours</h3>
            <p>
              Monday - Sunday <br /> 9:00AM - 10:00PM
            </p>
          </div>
          <div className="detail">
            <h3>Contact Us</h3>
            <p>
              91 95465 00 ** <br /> info@gmail.com
            </p>
            <div className="icons">
              <FaFacebook className="myicon" />
              <FaInstagram className="myicon" />
              <FaYoutube className="myicon" />
              <FaTwitter className="myicon" />
            </div>
          </div>
        </div>

        <div className="line">
          <span></span>
          <sub>
            &copy; 2023 - Designed by The WebShala...Developed by Mighty
          </sub>
        </div>
      </div>
    </Footerr>
  );
};

const Footerr = styled.div`
  width: 100%;
  padding: 3rem 6rem 1.5rem 6rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.imgUrl});
  background-position: 100%;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 720px){
    padding: 3rem 2rem 1.5rem 2rem;
  }

  @media (max-width: 662px){
    .details{
      flex-direction: column;
    }
  }

  .details {
    display: flex;
    justify-content: space-around;
    width: 100%;
    .detail {
        display: flex;
        flex-direction: column;
        align-items: center;
      h3 {
        font-family: "Poppins", sans-serif;
        padding-bottom: .9rem;
      }
      p {
        color: #c8c8c8;
      }
      .icons{
        font-size: 1.5rem;
        color: #c8c8c8;

        .myicon{
            cursor: pointer;
            margin: 0 .5rem;
        }
      }
    }
  }

  .line {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      width: 90%;
      height: 1px;
      background-color: #c2ccd5;
      margin: 3rem 0 1rem 0;
    }
    sub {
      font-family: "Poppins", sans-serif;
      color: #c8c8c8;
    }
  }
`;

export default Footer;
