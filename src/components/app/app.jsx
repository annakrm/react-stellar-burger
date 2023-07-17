import styles from "./app.module.css";
import { AppHeader } from "..";
import { BurgerConfigurator } from "../burger-configurator";

export const App = () => (
  <div className={styles.app}>
    <AppHeader />
    {/* TODO: В будущем здесь будет релизован роутинг */}
    <BurgerConfigurator />
  </div>
);
