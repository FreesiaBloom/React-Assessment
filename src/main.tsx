import { StrictMode } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import store from "./modules/core/store/store";
import router from "./modules/core/routing/Router";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
