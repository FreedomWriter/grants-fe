import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router} from 'react-router-dom';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";

ReactDOM.render(
  <Provider store={store}>
<<<<<<< HEAD
    <React.StrictMode>
      <PersistGate persistor={persistor}>
        <Router>
          <App />          
        </Router>
      </PersistGate>
    </React.StrictMode>
=======
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
>>>>>>> 4cb946a5e9542b6a038e3cca4770077365e7cbfc
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
