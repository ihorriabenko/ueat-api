import 'dotenv/config'
import "express-async-errors";
import express from 'express'
import restaurantRouter from './restaurant/restaurant.controller'
import categoryRouter from './category/category.controller'
import orderRouter from './order/order.controller'
import {notFound, serverError} from "./middleware";

const app = express();

app.use(express.json());

app.use('/restaurants', restaurantRouter)
app.use('/categories', categoryRouter)
app.use('/order', orderRouter)

app.use(notFound)
app.use(serverError)

export default app
