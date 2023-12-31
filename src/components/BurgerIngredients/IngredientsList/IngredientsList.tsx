import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  setBurgerIngredientDetails,
  setBurgerIngredientsActiveTab,
} from "~/services/actions";
import { useAppDispatch, useAppSelector } from "~/services/hooks";
import { BurgerIngredientType } from "~/shared/api/dto";
import type { BurgerIngredientDto } from "~/shared/api/dto";
import { BurgerIngredientTab } from "~/shared/lib/types";
import { Modal } from "~/shared/ui/Modal";

import { IngredientDetails } from "../../IngredientDetails";

import { CHANGE_ACTIVE_TAB_TOUCH_POINT } from "./constants";
import { IngredientsCategory } from "./IngredientsCategory";
import styles from "./IngredientsList.module.css";

export const IngredientsList: FC = () => {
  const dispatch = useAppDispatch();

  const { data: ingredientsData, activeTab } = useAppSelector(
    ({ burgerIngredients }) => burgerIngredients
  );

  const { data: burgerIngredientDetails } = useAppSelector(
    ({ burgerIngredientDetails }) => burgerIngredientDetails
  );

  const wrapperRef = useRef(null);
  const [categoryPositions, setCategoryPositions] = useState<{
    bunsTopPosition?: number;
    saucesTopPosition?: number;
    mainTopPosition?: number;
  }>({});

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const bunsCategory = document.getElementById("buns-category");
      const saucesCategory = document.getElementById("sauces-category");
      const mainCategory = document.getElementById("main-category");

      const bunsTopPosition = bunsCategory.getBoundingClientRect().top;
      const saucesTopPosition = saucesCategory.getBoundingClientRect().top;
      const mainTopPosition = mainCategory.getBoundingClientRect().top;

      setCategoryPositions({
        bunsTopPosition,
        saucesTopPosition,
        mainTopPosition,
      });
    };

    const element = wrapperRef.current;
    element.addEventListener("scroll", handleScroll);

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (categoryPositions) {
      const {
        bunsTopPosition,
        saucesTopPosition,
        mainTopPosition,
      } = categoryPositions;

      const isBunsActiveTab = activeTab === BurgerIngredientTab.BUNS;
      const isSaucesActiveTab = activeTab === BurgerIngredientTab.SAUCES;
      const isMainActiveTab = activeTab === BurgerIngredientTab.MAIN;

      if (
        bunsTopPosition < CHANGE_ACTIVE_TAB_TOUCH_POINT &&
        bunsTopPosition > 0 &&
        !isBunsActiveTab
      ) {
        dispatch(setBurgerIngredientsActiveTab(BurgerIngredientTab.BUNS));
      }

      if (
        saucesTopPosition < CHANGE_ACTIVE_TAB_TOUCH_POINT &&
        saucesTopPosition > 0 &&
        !isSaucesActiveTab
      ) {
        dispatch(setBurgerIngredientsActiveTab(BurgerIngredientTab.SAUCES));
      }

      if (
        mainTopPosition < CHANGE_ACTIVE_TAB_TOUCH_POINT &&
        mainTopPosition > 0 &&
        !isMainActiveTab
      ) {
        dispatch(setBurgerIngredientsActiveTab(BurgerIngredientTab.MAIN));
      }
    }
  }, [categoryPositions, activeTab, dispatch]);

  const sortedIngredientLists = ingredientsData.reduce(
    (targetLists, currentItem) => {
      switch (currentItem.type) {
        case BurgerIngredientType.BUN:
          return { ...targetLists, buns: [...targetLists.buns, currentItem] };
        case BurgerIngredientType.SAUCE:
          return {
            ...targetLists,
            sauces: [...targetLists.sauces, currentItem],
          };
        case BurgerIngredientType.MAIN:
          return { ...targetLists, main: [...targetLists.main, currentItem] };
        default:
          return targetLists;
      }
    },
    { buns: [], sauces: [], main: [] }
  );

  const { buns, sauces, main } = sortedIngredientLists;

  const isBunsVisible = Boolean(buns && buns.length);
  const isSaucesVisible = Boolean(sauces && sauces.length);
  const isMainVisible = Boolean(main && main.length);

  const handleBurgerIngredientClick = (data: BurgerIngredientDto) => {
    dispatch(setBurgerIngredientDetails(data));
  };

  const handleBurgerIngredientModalClose = () => {
    handleBurgerIngredientClick(null);
    navigate("/");
  };

  return (
    <div ref={wrapperRef} className={`${styles.wrapper} custom-scroll`}>
      {isBunsVisible && (
        <IngredientsCategory
          id="buns-category"
          title="Булки"
          items={buns}
          onOpenIngredientDetails={handleBurgerIngredientClick}
        />
      )}

      {isSaucesVisible && (
        <IngredientsCategory
          id="sauces-category"
          title="Соусы"
          items={sauces}
          onOpenIngredientDetails={handleBurgerIngredientClick}
        />
      )}

      {isMainVisible && (
        <IngredientsCategory
          id="main-category"
          title="Начинки"
          items={main}
          onOpenIngredientDetails={handleBurgerIngredientClick}
        />
      )}

      {Boolean(burgerIngredientDetails) && (
        <Modal onClose={handleBurgerIngredientModalClose}>
          <IngredientDetails />
        </Modal>
      )}
    </div>
  );
};
