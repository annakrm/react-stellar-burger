import type { FC } from "react";

import { Page } from "~/shared/ui/Page";

import styles from "./OrdersFeed.module.css";
import { OrdersFeedInfo } from "./OrdersFeedInfo";
import { OrdersList } from "./OrdersList";

export const OrdersFeed: FC = () => {
  return (
    <Page contentClassNames={styles.wrapper}>
      <OrdersList />
      <OrdersFeedInfo />
    </Page>
  );
};
