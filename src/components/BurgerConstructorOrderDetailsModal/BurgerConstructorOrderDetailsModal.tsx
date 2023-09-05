import type { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "~/services/types";
import DoneImage from "~assets/images/done.png";
import { Modal } from "~shared/ui/Modal";

import styles from "./BurgerConstructorOrderDetailsModal.module.css";

type Props = {
  onClose: () => void;
};

export const BurgerConstructorOrderDetailsModal: FC<Props> = ({ onClose }) => {
  const { details: orderDetails } = useSelector(
    ({ order }: RootState) => order
  );

  return (
    <Modal onClose={onClose}>
      <div className={`${styles.contentWrapper}`}>
        <span className="text text_type_digits-large mt-30">
          {orderDetails.order.number}
        </span>
        <span className="text text_type_main-medium mt-8">
          идентификатор заказа
        </span>

        <img src={DoneImage} className="m-15" alt="Иконка готовности заказа" />

        <span className="text text_type_main-default mb-2">
          Ваш заказ начали готовить
        </span>

        <span className="text text_type_main-default text_color_inactive mb-30">
          Дождитесь готовности на орбитальной станции
        </span>
      </div>
    </Modal>
  );
};
