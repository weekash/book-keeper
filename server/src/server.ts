import dotenv from "dotenv"
dotenv.config()
import express from "express"
import rootRouter from "./routes"
import errorHandler from "./middlewares/errorHandler"

const app = express()
declare global {
  namespace Express {
    interface Request {
      context: Record<string, any>;
    }
  }
}
app.use(express.json())
app.use(rootRouter)
app.use(errorHandler)

const PORT:string|number = process.env.PORT || 6000
app.listen(PORT,()=>console.log(`SERVER RUNNING ON PORT ${[PORT]}`))