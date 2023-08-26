import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import { checkUserAuth, setAuthChecked } from "../../services/actions";

export const ProtectedRoute = ({ onlyUnAuth = false, component }) => {
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

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };

    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // !onlyUnAuth && user
  return component;
};

export const OnlyAuth = (props) => (
  <ProtectedRoute onlyUnAuth={false} {...props} />
);
export const OnlyUnAuth = (props) => <ProtectedRoute onlyUnAuth {...props} />;
