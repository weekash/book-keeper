import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import rootRouter from "./routes"
import errorHandler from "./middlewares/errorHandler"
import { publicMiddleware } from "./middlewares/publicMiddleware"

const app = express()
declare global {
  namespace Express {
    interface Request {
      context: Record<string, any>;
    }
  }
}
app.use(cors({
  origin:process.env.CORS_ORIGIN
}))
app.use(express.json())
app.use(publicMiddleware)
app.use('/api',rootRouter)
app.use(errorHandler)


const PORT:number = parseInt(process.env.PORT || "6000")
app.listen(PORT,()=>console.log(`SERVER RUNNING ON PORT ${[PORT]}`))