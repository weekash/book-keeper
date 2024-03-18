import { Router } from "express";
import BookController from "../../controllers/BookController";
import { authMiddleware } from "../../middlewares/authMiddleware";
import validator from "../../middlewares/validationMiddleware";
import { reviewSchema } from "./schema";


const bookRouter = Router()

bookRouter.get('/', BookController.getAllBooks)
bookRouter.get('/:bookId', BookController.getBookDetailsById)
bookRouter.get('/:bookId/reviews',  BookController.getReviewsOfBook)
bookRouter.post('/:bookId/reviews', authMiddleware, validator(reviewSchema), BookController.addReviewOfBook)
bookRouter.post('/:bookId/reviews/:reviewId',authMiddleware, validator(reviewSchema), BookController.updateReviewOfBook)
bookRouter.delete('/:bookId/reviews/:reviewId',authMiddleware, BookController.deleteReviewOfBook)
export default bookRouter;