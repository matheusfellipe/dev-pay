import { Router } from 'express'
import { createCheckoutController } from '../modules/checkouts/useCases/create-checkout'
import { ensureAuthenticate } from '../infra/shared/http/middleware/ensure-authenticate.middleware'

const checkoutRouter = Router()

checkoutRouter.post('/checkout', ensureAuthenticate,async (request, response) => {
  await createCheckoutController.handle(request,response)
})

export { checkoutRouter }