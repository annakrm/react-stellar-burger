import type { FC } from "react";

import { BurgerConstructor } from "~components/BurgerConstructor";
import { BurgerIngredients } from "~components/BurgerIngredients";
import { Page } from "~shared/ui/Page";

export const BurgerConfiguration: FC = () => (
  <Page>
    <BurgerIngredients />
    <BurgerConstructor />
  </Page>
);
