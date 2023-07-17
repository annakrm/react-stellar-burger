import { useState } from 'react';
import { IngredientTypes } from '../../../../utils/constants';
import { mockedData } from '../../../../utils/mockedData';
import { IngredientModal } from '../ingredient-modal';
import { IngredientsCategory } from './ingredients-category';

import styles from './ingredients-list.module.css';

export const IngredientsList = () => {
    const [ingredientModalData, setIngredientModalData] = useState(null);

    const sortedIngredientLists = mockedData.reduce((targetLists, currentItem) => {
        switch (currentItem.type) {
            case IngredientTypes.BUN:
                return { ...targetLists, buns: [...targetLists.buns, currentItem] };
            case IngredientTypes.SAUCE:
                return { ...targetLists, sauces: [...targetLists.sauces, currentItem] };
            case IngredientTypes.MAIN:
                return { ...targetLists, main: [...targetLists.main, currentItem] };
            default: 
                return targetLists;
        }
    }, { buns: [], sauces: [], main: [] })

    const { buns, sauces, main } = sortedIngredientLists;

    const isBunsVisible = Boolean(buns && buns.length);
    const isSaucesVisible = Boolean(sauces && sauces.length);
    const isMainVisible = Boolean(main && main.length);

    return (
        <div className={`${styles.wrapper} custom-scroll`}>
            {isBunsVisible && <IngredientsCategory title="Булки" items={buns} onOpenIngredientModal={setIngredientModalData} />}
            {isSaucesVisible && <IngredientsCategory title="Соусы" items={sauces} onOpenIngredientModal={setIngredientModalData} />}
            {isMainVisible && <IngredientsCategory title="Начинки" items={main} onOpenIngredientModal={setIngredientModalData} />}

            {Boolean(ingredientModalData) && <IngredientModal data={ingredientModalData} onClose={() => setIngredientModalData(null)} />}
        </div>
    );
}
