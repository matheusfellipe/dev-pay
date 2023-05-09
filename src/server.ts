import 'dotenv/config'
import { app } from './app'
const port = process.env.port || 3000





app.listen(3000,()=>console.log(`server is running on PORT ${port}`));