import styles from "./app.module.css";
import { AppHeader } from "../app-header";
import { BurgerConfiguration } from "../burger-configuration";

export const App = () => (
  <div className={styles.app}>
    <AppHeader />
    {/* TODO: В будущем здесь будет релизован роутинг */}
    <BurgerConfiguration />
  </div>
);
