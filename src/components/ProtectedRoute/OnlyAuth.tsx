import type { FC } from "react";

import type { ProtectedRouteProps } from "./ProtectedRoute";
import { ProtectedRoute } from "./ProtectedRoute";

type Props = Pick<ProtectedRouteProps, "component">;

export const OnlyAuth: FC<Props> = (props) => (
  <ProtectedRoute onlyUnauth={false} {...props} />
);
