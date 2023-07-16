import styles from "./app.module.css";
import { AppHeader } from "../components";
import { BurgerConstructor } from "../pages";

export const App = () => (
  <div className={styles.app}>
    <AppHeader />
    {/* TODO: В будущем здесь будет релизован роутинг */}
    <BurgerConstructor />
  </div>
);
