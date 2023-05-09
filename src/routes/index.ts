import { Router } from 'express'
import { userRouter } from './user.route'
import { sellerRouter } from './seller.route'
import { checkoutRouter } from './checkout.route'

const router = Router()

router.use(userRouter)
router.use(sellerRouter)
router.use(checkoutRouter)

export {router}