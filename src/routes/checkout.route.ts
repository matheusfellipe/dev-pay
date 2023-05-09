import { Router } from 'express'
import { createCheckoutController } from '../modules/checkouts/useCases/create-checkout'

const checkoutRouter = Router()

checkoutRouter.post('/checkout', async (request, response) => {
  await createCheckoutController.handle(request,response)
})

export { checkoutRouter }