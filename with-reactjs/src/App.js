import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './globalStyles';
import Main from './pages/index';

function App() {
    return (
        <>
            <Main />
            <GlobalStyles />
            <ToastContainer autoClose={1000} />
        </>
    );
}

export default App;
