import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        list-style: none;
    }

    html, body, #root {
        height: 100%;
        width: 100%;

    }

    html {
        font-size: 62.5%;
    }

    body {
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,700;1,400&display=swap');
        font-family: 'Ubuntu', sans-serif;
        background: #44475a;
    }

    input, button {
        height: 46px;
        border-radius: 4px;
    }
     input {
         padding: 0 16px;
     }
     button {
         cursor: pointer;
     }
`;
