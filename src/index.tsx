import "./assets/scss/index.scss";
import "./libs/i18n";
import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
