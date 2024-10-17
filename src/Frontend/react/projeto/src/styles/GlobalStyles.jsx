import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Robotech";
        src: url("./assets/fonts/ROBOTECH\ GP.ttf") format("truetype"); /* ou woff, woff2, etc. */
        font-style: normal;
    }   

    :root{
        --line-border-fill: #630cf1;
        --line-border-empty: #000;
    }


    * {
        margin-top: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        scroll-behavior: smooth;
        background-color: black;
        color: white;
        overflow-x: hidden;
    }
`;

export default GlobalStyles;
