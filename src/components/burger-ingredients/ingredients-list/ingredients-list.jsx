import { useEffect, useState } from 'react';
import { IngredientTypes } from '../../../utils/constants';
import { IngredientDetails } from '../../ingredient-details';
import { IngredientsCategory } from './ingredients-category';

import styles from './ingredients-list.module.css';
import { getData } from '../../../utils/api';

export const IngredientsList = () => {
    const [ingredietDetailsData, setIngredientDetailsData] = useState(null);
    const [ingredientsData, setIngredientsData] = useState([]);

    const loadData = async () => {
        const { data } = await getData()
        .catch((err) => { console.error(err); });

        if (data) {
            console.log(data);
            setIngredientsData(data);
        }
        
    }

    useEffect (() => {
        loadData();
    }, []);

    const sortedIngredientLists = ingredientsData.reduce((targetLists, currentItem) => {
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
            {isBunsVisible && <IngredientsCategory title="Булки" items={buns} onOpenIngredientDetails={setIngredientDetailsData} />}
            {isSaucesVisible && <IngredientsCategory title="Соусы" items={sauces} onOpenIngredientDetails={setIngredientDetailsData} />}
            {isMainVisible && <IngredientsCategory title="Начинки" items={main} onOpenIngredientDetails={setIngredientDetailsData} />}

            {Boolean(ingredietDetailsData) && <IngredientDetails data={ingredietDetailsData} onClose={() => setIngredientDetailsData(null)} />}
        </div>
    );
}
