import { Page } from "..";
import { BurgerConstructor } from "../burger-constructor";
import { BurgerIngredients } from "../burger-ingredients";


export const BurgerConfigurator = () => (
    <Page>
        <BurgerIngredients />
        <BurgerConstructor />
    </Page>
);