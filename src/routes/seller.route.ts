import { Router } from 'express'
import { createSellerController } from '../modules/sellers/useCases'

const sellerRouter = Router()

sellerRouter.post('/sellers', async (request, response) => {
  await createSellerController.handle(request,response)
})

export { sellerRouter }