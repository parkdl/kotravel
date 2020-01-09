import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
${reset};

a{
    text-decoration:none;
    color:inherit;
}
*{
    box-sizing:border-box;
}
body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:12px;
    width: 100%;
    height: 100vh;
    max-height: 100%;
    background-color: #EDEFF0;
}

`;

export default globalStyles;
