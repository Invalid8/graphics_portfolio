import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import App from "./App";

import "./vendor/bootstrap-icons/bootstrap-icons.css";
import "./vendor/boxicons/css/boxicons.min.css";
import "./vendor/bootstrap/css/bootstrap.min.css";

import "./css/animate.css";
import "./css/index.css";
import "./css/base.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserAuthContextProvider>
  </React.StrictMode>
);
