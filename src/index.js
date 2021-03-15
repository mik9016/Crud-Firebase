import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { CrudContextProvider } from "./contexts/CrudContext";


ReactDOM.render(
  <React.StrictMode>

      <CrudContextProvider>
        <App/>
      </CrudContextProvider>

  </React.StrictMode>,
  document.getElementById("root")
);
