import { HashRouter, Routes, Route } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useNuiEvent } from "./utils/useNuiEvents";
import { fetchNui } from "./utils/fetchNui";

export const App = () => {

    const [nui, setNui] = useState(false) // This makes sure that the NUI is false on startup of the resource

    useNuiEvent("setOpen", setNui)

    const escFunction = useCallback((event: { key: string; }) => {
        if (event.key === "Escape") {
            setNui(false)
            fetchNui("closeMenu")
        }
    }, [])

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    return nui ? (
        <HashRouter basename="/">
            <Routes>
                {/* Routes here */}
            </Routes>
        </HashRouter>
    ) : null;
};

export default App;