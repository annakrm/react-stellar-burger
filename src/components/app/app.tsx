import { Route, Routes } from "react-router-dom";

import { AppHeader } from "../app-header";
import { NotFound } from "../not-found/not-found";
import { ChangeProfile } from "../change-profile";
import { IngredientDetails } from "../ingredient-details";

import {
  BurgerConfigurationPage,
  FeedPage,
  ForgotPasswordPage,
  LoginPage,
  OrdersPage,
  ProfilePage,
  RegistrationPage,
} from "../../pages";

import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";

import styles from "./app.module.css";

export const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<AppHeader />}>
          <Route path="/" element={<BurgerConfigurationPage />} />
          <Route path="feed" element={<FeedPage />} />
          <Route
            path="profile"
            element={<OnlyAuth component={<ProfilePage />} />}
          >
            <Route index element={<ChangeProfile />} />
            {/* <Route path="change-profile" element={<ChangeProfile />} /> */}
            <Route path="orders" element={<OrdersPage />} />
          </Route>
          <Route path="/ingredients/:id" element={<IngredientDetails data />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="/login"
            element={<OnlyUnAuth component={<LoginPage />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
