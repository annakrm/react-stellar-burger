import { Page } from "../../components";
import { BurgerConfigurator } from "./burger-configurator";
import { BurgerIngredients } from "./burger-ingredients";


export const BurgerConstructor = () => (
    <Page>
        <BurgerIngredients />
        <BurgerConfigurator />
    </Page>
);