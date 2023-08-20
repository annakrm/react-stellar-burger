import { Route, Routes } from "react-router-dom";

import styles from "./app.module.css";
import { AppHeader } from "../app-header";
import { BurgerConfiguration } from "../burger-configuration";
import { Profile } from "../../pages/profile";
import { Feed } from "../../pages/feed";
import { NotFound } from "../not-found/not-found";
import { Login } from "../../pages/login";
import { Orders } from "../../pages/orders";
import { ChangeProfile } from "../change-profile";
import { Registration } from "../../pages/registration";
import { ForgotPassword } from "../../pages/forgot-password";
import { IngredientDetails } from "../ingredient-details";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserAuth } from "../../utils/actions";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserAuth());
  }, []);

  return (
 
      <div className={styles.app}>
        <Routes>
            <Route path="/" element={<AppHeader />}>
            <Route path="/" element={<BurgerConfiguration />} />
            <Route path="feed" element={<Feed />} />
                <Route path="profile" element={<OnlyAuth component={<Profile />} />} >
                  <Route index element={<ChangeProfile />} />
                  {/* <Route path="change-profile" element={<ChangeProfile />} /> */}
                  <Route path="orders" element={<Orders />} />
                </Route>
          </Route>

            <Route path="/ingredients/:id" element={<IngredientDetails />}/>
            <Route path="/register" element={<Registration />}/>
            <Route path="/forgot-password" element={<ForgotPassword />}/>
            <Route path="/login" element={<OnlyUnAuth component={<Login />} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
  )
}
