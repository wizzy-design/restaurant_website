import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-size: 16px;
    line-height: 1.5;
    -webkit-tap-highlight-color: transparent;
  }

  img{
    vertical-align: middle;
    max-width: 100%;
  }

  p{
    margin: 0 0 30px;
    font-family: "Poppins", sans-serif;
    color: #c8c8c8;
    font-weight: 300;
  }

  button.btn {
    /* width: 10rem; */
    padding: 8px 30px;
    border-radius: 30px;
    border: 2px solid #eaa023;
    background: transparent;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    transition: all 0.3s ease;
    color: #eaa023;
    outline: none;
    cursor: pointer;
    line-height: 1.5;

    &:hover {
      background: #eaa023;
      color: white;
    }
  }

  h1{
    font-weight: 700;
    color: white;
  }

  h2{
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: white;
  }

  h3{
    font-weight: 500;
    color: white;
  }

/* Scrollbar */

  * {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
  }

*::-webkit-scrollbar {
  width: 2px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(155, 155, 155, 0.5);
  border-radius: 20px;
  border: transparent;
}

`;

export default GlobalStyle;
