import React from 'react';
import {Route, Routes} from "react-router-dom";

import HomePage from "./pages/home.page";

const App = () => {
    return (
        <div>
            <Routes>
                <Route index element={<HomePage/>}/>
            </Routes>
        </div>
    );
};

export default App;