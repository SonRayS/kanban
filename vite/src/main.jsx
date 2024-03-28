import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UseProvider } from "./contexts/userLocalStorage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <UseProvider>
            <App />
        </UseProvider>
    </BrowserRouter>
);
