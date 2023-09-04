import type { FC } from "react";

import type { ProtectedRouteProps } from "./ProtectedRoute";
import { ProtectedRoute } from "./ProtectedRoute";

type Props = Pick<ProtectedRouteProps, "component">;

export const OnlyUnauth: FC<Props> = (props) => (
  <ProtectedRoute onlyUnauth {...props} />
);
