import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"

import styles from './ingredients-list-item.module.css';

export const IngredientsListItem = ({ image: imageUrl, name, price }) => (
    <div className={styles.wrapper}>
        <img src={imageUrl} alt='Изображение ингредиента бургера' />
        <span className={`${styles.price} text text_type_digits-default mt-1 mb-1`}>{price}<CurrencyIcon type="primary" /></span>
        <span className="text text_type_main-default">{name}</span>
    </div>
)

// "_id":"60666c42cc7b410027a1a9b5",
// "name":"Говяжий метеорит (отбивная)",
// "type":"main",
// "proteins":800,
// "fat":800,
// "carbohydrates":300,
// "calories":2674,
// "price":3000,
// "image":"https://code.s3.yandex.net/react/code/meat-04.png",
// "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
// "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
// "__v":0