import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:none;
    text-decoration:none;
    font-family: "Montserrat", sans-serif;
}

body{
    background: #000000;
    overflow-x: hidden;
}

*::-webkit-scrollbar{
    width: 15px;
}

/* *::-webkit-scrollbar-track{
    background: #F1E9E9;
} */

*::-webkit-scrollbar-thumb{
    background-color: #3C3C3C;
    border-radius: 10px;
    border: 3px solid #FFFFFF;
}
`