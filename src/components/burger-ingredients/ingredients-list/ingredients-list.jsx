import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  BurgerIngredientTab,
  CHANGE_ACTIVE_TAB_TOUCH_POINT,
  IngredientType,
} from "../../../shared/lib/constants";
import { IngredientDetails } from "../../ingredient-details";

import { Modal } from "../../modal";

import {
  getBurgerIngredients,
  setBurgerIngredientDetails,
  setBurgerIngredientsActiveTab,
} from "../../../services/actions";

import { IngredientsCategory } from "./ingredients-category";

import styles from "./ingredients-list.module.css";

export const IngredientsList = () => {
  const dispatch = useDispatch();

  const { data: ingredientsData, activeTab } = useSelector(
    ({ burgerIngredients }) => burgerIngredients
  );

  const { data: burgerIngredientDetails } = useSelector(
    ({ burgerIngredientDetails }) => burgerIngredientDetails
  );

  const wrapperRef = useRef(null);
  const [categoryPositions, setCategoryPositions] = useState({});

  useEffect(() => {
    dispatch(getBurgerIngredients());

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
        case IngredientType.BUN:
          return { ...targetLists, buns: [...targetLists.buns, currentItem] };
        case IngredientType.SAUCE:
          return {
            ...targetLists,
            sauces: [...targetLists.sauces, currentItem],
          };
        case IngredientType.MAIN:
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

  const handleBurgerIngredientClick = (data) => {
    dispatch(setBurgerIngredientDetails(data));
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
        <Modal onClose={() => handleBurgerIngredientClick(null)}>
          <IngredientDetails data={burgerIngredientDetails} />
        </Modal>
      )}
    </div>
  );
};
