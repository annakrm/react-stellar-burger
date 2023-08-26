import { ProtectedRoute } from "./protected-route";

export const OnlyUnauth = (props) => <ProtectedRoute onlyUnAuth {...props} />;
