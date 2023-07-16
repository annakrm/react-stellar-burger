import styles from './ingredients-category.module.css';
import { IngredientsListItem } from './ingredients-list-item';

export const IngredientsCategory = ({ title, items }) => (
    <div className={styles.wrapper}>
        <h3 className="text text_type_main-medium mt-10 mb-6">{title}</h3>
        <div className={styles.content}>
            {items.map(({ _id: id, name, price, image }) => (
                <IngredientsListItem key={id} name={name} price={price} image={image} />
            ))}
        </div>
    </div>
)  
