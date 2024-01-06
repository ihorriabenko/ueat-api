import {NextFunction, Request, Response, Router} from "express";
import {getCategories} from "./category.service";

const router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
		const categories = await getCategories()
		res.status(200).json(categories)
})

export default router
