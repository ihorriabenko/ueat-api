import {NextFunction, Request, Response, Router} from "express";
import {
	getSearchedRestaurants,
	getSortedRestaurants
} from "./restaurant.service";

const router = Router()

router.get('/sorted', async (req: Request, res: Response, next: NextFunction) => {
		const sortedRestaurants = await getSortedRestaurants()
		res.status(200).json(sortedRestaurants)
})

router.post('/specific', async (req: Request, res: Response, next: NextFunction) => {
		const restaurants = await getSearchedRestaurants(req.body)
		res.status(200).json(restaurants)
})

export default router
