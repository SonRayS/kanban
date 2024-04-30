import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/userLocalStorage.jsx";
import { TaskProvider } from "./contexts/tasks.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <UserProvider>
            <TaskProvider>
                <App />
            </TaskProvider>
        </UserProvider>
    </BrowserRouter>
);
