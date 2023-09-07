import type { FC } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

import { setBurgerIngredientDetails } from "~/services/actions";
import { useAppDispatch, useAppSelector } from "~/services/hooks";
import { IngredientDetails as IngredientDetailsComponent } from "~components/IngredientDetails";
import { Page } from "~shared/ui/Page";

import styles from "./IngredientDetails.module.css";

export const IngredientDetails: FC = () => {
  const dispatch = useAppDispatch();

  const burgerIngredients = useAppSelector(
    ({ burgerIngredients }) => burgerIngredients.data
  );

  const { id: ingredientId } = useParams();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return () => dispatch(setBurgerIngredientDetails(null)) as any;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
