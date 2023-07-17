import styles from './ingredients-category.module.css';
import { IngredientsListItem } from './ingredients-list-item';

export const IngredientsCategory = ({ title, items, onOpenIngredientModal }) => (
    <div className={styles.wrapper}>
        <h3 className="text text_type_main-medium mt-10 mb-6">{title}</h3>
        <div className={styles.content}>
            {items.map((item) => (
                <>
                    <IngredientsListItem
                        key={item._id}
                        data={item}
                        onOpenIngredientModal={onOpenIngredientModal}
                    />
                </>
            ))}
        </div>
    </div>
)  
