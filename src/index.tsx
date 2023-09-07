import { StrictMode } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { App } from "./app";
import reportWebVitals from "./reportWebVitals";
import { initStore } from "./services/store";

const store = initStore();

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DndProvider>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
