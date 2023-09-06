export type OrderDto = {
  _id: string;
  name: string;
  ingredients: string[];
  status: OrderStatus | string;
  number: number;
  createdAt: string;
  updatedAt: string;
};

export enum OrderStatus {
  CREATED = "created",
  PENDING = "pending",
  DONE = "done",
}
