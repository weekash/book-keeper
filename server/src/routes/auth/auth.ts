import { Router } from "express";
import AuthController from "../../controllers/AuthController";
import { signInSchema, signupSchema } from "./schema";
import validator from "../../middlewares/validationMiddleware";
import { authMiddleware } from "../../middlewares/authMiddleware";


const authRouter = Router()

authRouter.post('/signup',validator(signupSchema), AuthController.signUp)
authRouter.post('/signin',validator(signInSchema), AuthController.signIn)
authRouter.get('/me', authMiddleware, AuthController.getUser)

export default authRouter;