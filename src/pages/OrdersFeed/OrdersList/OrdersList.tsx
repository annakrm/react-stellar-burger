import type { FC } from "react";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getBurgerIngredients,
  ordersAllWsConnectionStart,
  ordersWsConnectionClosed,
} from "~/services/actions";
import { RootState } from "~/services/types";
import { OrderDto } from "~/shared/api/dto";
import { mockedOrders } from "~/shared/api/mocks";

import styles from "./OrdersList.module.css";
import { OrdersListItem } from "./OrdersListItem";

export const OrdersList: FC = () => {
  const dispatch = useDispatch();

  const burgerIngredients = useSelector(
    ({ burgerIngredients }: RootState) => burgerIngredients.data
  );

  useEffect(() => {
    // dispatch(ordersAllWsConnectionStart());

    if (burgerIngredients.length === 0) {
      dispatch(getBurgerIngredients());
    }

    // return () => dispatch(ordersWsConnectionClosed());
  }, []);

  const handleOrderClick = (data: OrderDto) => {
    window.history.replaceState({}, "", data ? `/feed/${data._id}` : "/");

    // dispatch(setBurgerIngredientDetails(data));
  };

  console.log(mockedOrders);

  return (
    <div>
      <h1 className="text text_type_main-large mt-10 mb-5">Лента заказов</h1>
      <div className={`${styles.list} custom-scroll`}>
        {mockedOrders.map((data) => (
          <Fragment key={data._id}>
            <OrdersListItem data={data} onClick={handleOrderClick} />
          </Fragment>
        ))}

        {/* {Boolean(burgerIngredientDetails) && (
        <Modal onClose={() => handleBurgerIngredientClick(null)}>
          <IngredientDetails />
        </Modal>
      )} */}
      </div>
    </div>
  );
};
