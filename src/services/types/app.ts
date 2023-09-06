import { Store } from "redux";

import { rootReducer } from "../reducers";

export type AppStore = Store<ReturnType<typeof rootReducer>, any>;
export type AppDispatch = AppStore["dispatch"];

export type DispatchFunc = () => AppDispatch;
