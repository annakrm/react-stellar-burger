import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter } from "react-router-dom";

import { rootReducer } from "./services/reducers";
import reportWebVitals from "./reportWebVitals";
import { App } from "./components/app";

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

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
