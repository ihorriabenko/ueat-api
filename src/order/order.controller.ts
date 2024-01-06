import {Request, Response, NextFunction, Router} from "express";
import {postOrder} from "./order.service";
import {validateBody} from "../middleware";
import {orderJoiSchema} from "./order.model";

const router = Router()

router.post('/', validateBody(orderJoiSchema),
	async (req: Request, res: Response, next: NextFunction) => {
			await postOrder(req.body)
			res.status(201).json({status: "created"})
	}
)

export default router
