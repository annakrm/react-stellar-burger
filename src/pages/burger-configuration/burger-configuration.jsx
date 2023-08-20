import { Page } from "../../components/page";
import { BurgerConstructor } from "../../components/burger-constructor";
import { BurgerIngredients } from "../../components/burger-ingredients";

export const BurgerConfigurationPage = () => (
  <Page>
    <BurgerIngredients />
    <BurgerConstructor />
  </Page>
);
