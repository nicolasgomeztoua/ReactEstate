import { createGlobalStyle } from "styled-components";
import "@fontsource/montserrat";
const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Montserrat';
   overflow-x: hidden;
   @media screen and (max-width: 720px) {
    #eliminate {
      display: none;
    }
  }
}

    html,body{overflow-x:hidden}
`;
export default GlobalStyle;
