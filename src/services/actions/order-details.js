import { ORDER_DETAILS_SET_DATA } from '../constants';

export const setOrderDetails = (data) => ({
    type: ORDER_DETAILS_SET_DATA,
    data
});