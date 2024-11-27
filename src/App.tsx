import { HashRouter, Routes, Route } from "react-router-dom";

// Pages

import { Home } from "../src/pages/Home"
import { Settings } from "../src/pages/Settings"

export const App = () => {

    return (
        <HashRouter basename="/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </HashRouter>
    )
};