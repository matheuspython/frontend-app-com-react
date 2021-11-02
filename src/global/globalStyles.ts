import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,body{
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }
  body{
    background: #1d1d1d;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style-type: none;
  }
`