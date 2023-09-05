import type { FC } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { setBurgerIngredientDetails } from "~/services/actions";
import { RootState } from "~/services/types";
import { IngredientDetails as IngredientDetailsComponent } from "~components/IngredientDetails";
import { Page } from "~shared/ui/Page";

import styles from "./IngredientDetails.module.css";

export const IngredientDetails: FC = () => {
  const dispatch = useDispatch();

  const burgerIngredients = useSelector(
    ({ burgerIngredients }: RootState) => burgerIngredients.data
  );

  const { id: ingredientId } = useParams();

  useEffect(() => () => dispatch(setBurgerIngredientDetails(null)), []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (burgerIngredients) {
      const burgerIngredientDetails = burgerIngredients.find(
        (item) => item._id === ingredientId
      );

      dispatch(setBurgerIngredientDetails(burgerIngredientDetails));
    }
  }, [burgerIngredients]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Page columnContentAlignment contentClassNames={styles.wrapper}>
      <IngredientDetailsComponent />
    </Page>
  );
};
