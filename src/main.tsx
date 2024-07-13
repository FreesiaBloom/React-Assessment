import { StrictMode } from 'react'
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import './index.scss'
import "bootstrap/dist/css/bootstrap.min.css";

import store from "./modules/core/store/store";
import router from "./modules/core/routing/Router";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
