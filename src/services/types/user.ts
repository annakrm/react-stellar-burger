import { Action } from "redux";

import type { UserDto } from "~/shared/api/dto";

export type UserState = {
  userData: UserDto | null;
  authChecked: boolean;
};

export type UserAction = Action<string> & UserState;
