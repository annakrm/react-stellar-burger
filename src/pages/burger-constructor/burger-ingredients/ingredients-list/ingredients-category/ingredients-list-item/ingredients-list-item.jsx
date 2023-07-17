import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"

import styles from './ingredients-list-item.module.css';

export const IngredientsListItem = ({ data, onOpenIngredientModal }) => {
    const { image: imageUrl, name, price, added_count: addedCount } = data;

    return (
        <div className={styles.wrapper} onClick={() => onOpenIngredientModal(data)}>
            <img src={imageUrl} alt='Изображение ингредиента бургера' />
            <span className={`${styles.price} text text_type_digits-default mt-1 mb-1`}>{price}<CurrencyIcon type="primary" /></span>
            <span className="text text_type_main-default">{name}</span>

            {Boolean(addedCount) && (
                <div className={styles.counterWrapper}>
                    <Counter count={addedCount} />
                </div>
            )}
        </div>
    );
}