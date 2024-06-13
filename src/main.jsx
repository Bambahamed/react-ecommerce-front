import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./Reducers/index.js";
import SideDrawer from "./components/drawer/SideDrawer.jsx";

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HashRouter basename="/react-ecommerce-front/">
      <SideDrawer />
      <App />
      <ToastContainer
        position="top-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </HashRouter>
  </Provider>
);
