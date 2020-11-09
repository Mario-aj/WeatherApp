import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #__next {
        height: 100%;

        text-rendering: optimizeLegibility !important;
        -webkit-font-smothing: antialiased !important;
    }

    input, button {
        height: 36px;
        border-radius: 4px;
        outline: none;
    }

    @media(max-width: 768px){
        html {
            font-size: 55%;
        }
    }

    @media(max-width: 400px){
        html {
            font-size: 45%;
        }
    }
`;
