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
    color: white;
  }

  h1{
    font-weight: 700;
    color: white;
  }

  h2{
    font-weight: 700;
    color: white;
  }

  h3{
    font-weight: 500;
    color: white;
  }
`;

export default GlobalStyle;
