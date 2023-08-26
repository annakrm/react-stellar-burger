import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FC, useEffect } from "react";

import { checkUserAuth, setAuthChecked } from "../../services/actions";

type Props = {
  onlyUnauth: boolean;
  component: JSX.Element;
};

export const ProtectedRoute: FC<Props> = ({
  onlyUnauth = false,
  component,
}): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthChecked(false));
    dispatch(checkUserAuth());
  }, [dispatch]);

  const isAuthChecked = useSelector((store: any) => store.user.isAuthChecked); // TODO: fix any
  const user = useSelector((store: any) => store.user.user); // TODO: fix any
  const location = useLocation();

  if (!isAuthChecked) {
    return null;
  }

  if (onlyUnauth && user) {
    const { from } = location.state || { from: { pathname: "/" } };

    return <Navigate to={from} />;
  }

  if (!onlyUnauth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};
