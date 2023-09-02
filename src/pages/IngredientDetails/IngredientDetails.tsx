import type { FC } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getBurgerIngredients,
  setBurgerIngredientDetails,
} from "~/services/actions";
import { RootState } from "~/services/types";
import { IngredientDetails as IngredientDetailsComponent } from "~components/IngredientDetails";
import { Page } from "~shared/ui/Page";

import styles from "./IngredientDetails.module.css";

export const IngredientDetails: FC = () => {
  const dispatch = useDispatch();

  const data = useSelector(
    ({ burgerIngredients }: RootState) => burgerIngredients.data
  );

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getBurgerIngredients());
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (data) {
      const currentUrl = window.location.href;
      const ingredientId = currentUrl.substring(
        currentUrl.lastIndexOf("/") + 1
      );

      const burgerIngredientDetails = data.find(
        (item) => item._id === ingredientId
      );

      dispatch(setBurgerIngredientDetails(burgerIngredientDetails));
    }
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Page columnContentAlignment contentClassNames={styles.wrapper}>
      <IngredientDetailsComponent />
    </Page>
  );
};
