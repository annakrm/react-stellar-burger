import { ProtectedRoute } from "./protected-route";

export const OnlyAuth = (props) => (
  <ProtectedRoute onlyUnAuth={false} {...props} />
);
