import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { rootReducer } from "../reducers";

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;
