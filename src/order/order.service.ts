import OrderModel from './order.model'
import {Order} from "./order.type";

export const postOrder = async (order: Order) => {
	await OrderModel.create(order)
}
