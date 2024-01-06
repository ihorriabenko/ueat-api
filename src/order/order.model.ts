import {Schema, model} from 'mongoose'
import {Order} from "./order.type";
import Joi from 'joi';

const orderSchema = new Schema<Order>({
	restaurantId: {type: String, required: true},
	dishes: {type: [String], required: true},
})

const OrderModel = model<Order>('Order', orderSchema)

export const orderJoiSchema = Joi.object({
	restaurantId: Joi.string().required(),
	dishes: Joi.array().items(Joi.string().required()).required()
})

export default OrderModel
