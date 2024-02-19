import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./libs/redux/index.js";
import { StyleSheetManager } from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StyleSheetManager shouldForwardProp={(prop) => !prop.startsWith("$")}>
      <App />
    </StyleSheetManager>
  </Provider>
);
