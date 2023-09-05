import type { FC } from "react";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "~/services/hooks";
import { RootState } from "~/services/types";

import { checkUserAuth, setAuthChecked } from "../../services/actions";

export type ProtectedRouteProps = {
  onlyUnauth: boolean;
  component?: JSX.Element;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  onlyUnauth = false,
  component,
}): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAuthChecked(false));
    dispatch(checkUserAuth());
  }, [dispatch]);

  const { userData, authChecked } = useAppSelector(
    ({ user }: RootState) => user
  );
  const location = useLocation();

  if (!authChecked) {
    return null;
  }

  if (onlyUnauth && userData) {
    const { from } = location.state || { from: { pathname: "/" } };

    return <Navigate to={from} />;
  }

  if (!onlyUnauth && !userData) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};
