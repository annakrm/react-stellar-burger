import type { FC } from "react";
import { Fragment } from "react";

import { setOrderDetails } from "~/services/actions";
import { useAppDispatch, useAppSelector } from "~/services/hooks";
import { RootState } from "~/services/types";
import { OrderDto } from "~/shared/api/dto";
import { Modal } from "~/shared/ui/Modal";

import { OrderDetails } from "../OrderDetails";

import styles from "./OrdersList.module.css";
import { OrdersListItem } from "./OrdersListItem";

type Props = {
  orders: OrderDto[];
  profileView?: boolean;
};

export const OrdersList: FC<Props> = ({ orders, profileView }) => {
  const dispatch = useAppDispatch();

  const orderDetails = useAppSelector(
    ({ orderDetails }: RootState) => orderDetails.data
  );

  const handleOrderClick = (data: OrderDto) => {
    dispatch(setOrderDetails(data));
  };

  return (
    <div
      className={`${styles.list} ${
        profileView ? styles.listProfile : ""
      } custom-scroll`}
    >
      {orders.map((data) => (
        <Fragment key={data._id}>
          <OrdersListItem
            data={data}
            profileView={profileView}
            onClick={() => handleOrderClick(data)}
          />
        </Fragment>
      ))}

      {Boolean(orderDetails) && (
        <Modal onClose={() => handleOrderClick(null)}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};
