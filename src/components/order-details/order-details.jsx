import { Modal } from "../modal";
import styles from './order-details.module.css';

import DoneImage from '../../images/done.png';
import { useSelector } from "react-redux";

export const OrderDetails = ({ onClose }) => {
    const { data: orderDetailsData } = useSelector(({ orderDetails }) => orderDetails);

    return (
        <Modal onClose={onClose}>
            <div className={`${styles.contentWrapper}`}>
                <span className="text text_type_digits-large mt-30">{orderDetailsData.order.number}</span>
                <span className="text text_type_main-medium mt-8">идентификатор заказа</span>

                <img src={DoneImage} className="m-15" alt="done-img" />

                <span className="text text_type_main-default mb-2">Ваш заказ начали готовить</span>
                <span className="text text_type_main-default text_color_inactive mb-30">Дождитесь готовности на орбитальной станции</span>
            </div>
        </Modal>
    );
};
