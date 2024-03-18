import { Router } from "express";
import authRouter from "./auth/auth";
import bookRouter from "./book/book";

const router = Router()

router.use('/auth', authRouter)
router.use('/books', bookRouter)

export default router;