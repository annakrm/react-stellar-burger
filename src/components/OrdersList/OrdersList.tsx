import type { FC } from "react";
import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router";

import { setOrderDetails } from "~/services/actions";
import { useAppDispatch, useAppSelector } from "~/services/hooks";
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

  const orderDetails = useAppSelector(({ orderDetails }) => orderDetails.data);

  const location = useLocation();
  const navigate = useNavigate();

  const handleOrderClick = (data: OrderDto) => {
    dispatch(setOrderDetails(data));
  };

  const handleOrderDetailsModalClose = () => {
    const pathnameTokens = location.pathname.split("/");
    const parentPath = pathnameTokens.includes("profile")
      ? "profile/orders"
      : "feed";

    handleOrderClick(null);
    navigate(`/${parentPath}`);
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
        <Modal onClose={handleOrderDetailsModalClose}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};
