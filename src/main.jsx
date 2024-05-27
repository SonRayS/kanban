import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/userLocalStorage.jsx";
import { TaskProvider } from "./contexts/tasks.jsx";
import { ThemeContextProvider } from "./contexts/themeContext.jsx";
import { GlobalStyle } from "./components/GlobalStyle/Global.style.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <GlobalStyle />
        <ThemeContextProvider>
            <UserProvider>
                <TaskProvider>
                    <App />
                </TaskProvider>
            </UserProvider>
        </ThemeContextProvider>
    </BrowserRouter>
);
