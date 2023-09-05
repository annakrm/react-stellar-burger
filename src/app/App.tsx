/* eslint-disable prettier/prettier */
import type { FC } from "react";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { EditProfile } from "~/pages/EditProfile";
import { OrderDetails } from "~/pages/OrderDetails";
import { getBurgerIngredients } from "~/services/actions";
import { useAppDispatch } from "~/services/hooks";
import { AppHeader } from "~components/AppHeader";
import { OnlyAuth, OnlyUnauth } from "~components/ProtectedRoute";
import { BurgerConfiguration } from "~pages/BurgerConfiguration";
import { ForgotPassword } from "~pages/ForgotPassword";
import { IngredientDetails } from "~pages/IngredientDetails";
import { Login } from "~pages/Login";
import { Orders } from "~pages/Orders";
import { OrdersFeed } from "~pages/OrdersFeed";
import { Profile } from "~pages/Profile";
import { Registration } from "~pages/Registration";
import { ResetPassword } from "~pages/ResetPassword";
import { PageNotFound } from "~shared/ui/PageNotFound";

import styles from "./App.module.css";


export const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className={styles.app}>
      <Routes location={background || location}>
        <Route path="/" element={<AppHeader />}>
          <Route path="/" element={<BurgerConfiguration />} />

          <Route path="/feed" element={<OrdersFeed />} />
          <Route path="/feed/:id" element={<OrderDetails />} />

          <Route path="/profile" element={<OnlyAuth component={<Profile />} />}>
            <Route index element={<EditProfile />} />
            <Route path="orders" element={<Orders />} />
          </Route>

          <Route path="/ingredients/:id" element={<IngredientDetails />} />
          <Route path="/register" element={<OnlyUnauth component={<Registration />} />} />
          <Route path="/forgot-password" element={<OnlyUnauth component={<ForgotPassword />} />} />
          <Route path="/reset-password" element={<OnlyUnauth component={<ResetPassword />} />} />

          <Route path="/login" element={<OnlyUnauth component={<Login />} />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route path="/" element={<AppHeader />}>
            <Route path="/ingredients/:id" element={<IngredientDetails />} />
            <Route path="/feed/:id" element={<OrderDetails />} />
            <Route path="/profile/:id" element={<OrderDetails />} />
          </Route>
        </Routes>
      )}
    </div>
  );
};
