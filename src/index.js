import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import Firebase from "./services/firebase";
import firebaseContext from "./context/firebaseContext";

import "./index.css";

ReactDom.render(
    <firebaseContext.Provider value={new Firebase()}>
        <App />
    </firebaseContext.Provider>,
    document.getElementById("root")
);
