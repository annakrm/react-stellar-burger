import type { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { AppHeader } from "~components/AppHeader";
import { ChangeProfile } from "~components/ChangeProfile";
import { IngredientDetails } from "~components/IngredientDetails";
import { OnlyAuth, OnlyUnauth } from "~components/ProtectedRoute";
import { BurgerConfiguration } from "~pages/BurgerConfiguration";
import { ForgotPassword } from "~pages/ForgotPassword";
import { Login } from "~pages/Login";
import { Orders } from "~pages/Orders";
import { OrdersFeed } from "~pages/OrdersFeed";
import { Profile } from "~pages/Profile";
import { Registration } from "~pages/Registration";
import { PageNotFound } from "~shared/ui/PageNotFound";

import styles from "./App.module.css";

export const App: FC = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<AppHeader />}>
          <Route path="/" element={<BurgerConfiguration />} />
          <Route path="feed" element={<OrdersFeed />} />

          <Route path="profile" element={<OnlyAuth component={<Profile />} />}>
            <Route index element={<ChangeProfile />} />
            <Route path="orders" element={<Orders />} />
          </Route>

          {/* TODO: pass data prop */}
          <Route
            path="/ingredients/:id"
            element={<IngredientDetails data={null} />}
          />
          <Route path="/register" element={<Registration />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/login" element={<OnlyUnauth component={<Login />} />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
