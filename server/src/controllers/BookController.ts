import { NextFunction, Request, Response } from "express"
import BookService from "../services/BookService"
import { BOOKS_PER_PAGE, REVIEWS_PER_PAGE } from "../constants/values"
class BookController {
    static getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let page = parseInt(req.query.page as string || "1")
            let limit = parseInt(req.query.limit as string) || BOOKS_PER_PAGE
            const data = await BookService.getAllBooks({
                limit,
                page
            })
            return res.status(200).send(data)
        } catch (err) {
            next(err)
        }
    }
    static getBookDetailsById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bookId = req.params.bookId
            const userId = req.context?.user?.userId as string | undefined
            const data = await BookService.getBookById(bookId, userId)
            return res.status(200).send(data)
        } catch (err) {
            next(err)
        }

    }

    static getReviewsOfBook = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let page = parseInt(req.query.page as string || "1")
            let limit = parseInt(req.query.limit as string) || REVIEWS_PER_PAGE
            const bookId = req.params.bookId
            const data = await BookService.getAllReviewsOfBook(bookId, {
                limit,
                page
            })
            return res.status(200).send(data)
        } catch (err) {
            next(err)
        }
    }

    static addReviewOfBook = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { review, rating } = req.body
            const bookId = req.params.bookId
            const userId = req.context.user.userId
            const createdRecord = await BookService.addReviewToBook({bookId, review, rating, userId})
            res.status(200).send(createdRecord)
        } catch (err) {
            next(err)
        }
    }
    static updateReviewOfBook = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { review, rating } = req.body
            const userId = req.context.user.userId
            const reviewId = req.params.reviewId
            await BookService.updateReviewOfBook(reviewId, userId,{review, rating})
            res.status(200).send('Updated Successfully')
        } catch (err) {
            next(err)
        }
    }
    static deleteReviewOfBook = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.context.user.userId
            const reviewId = req.params.reviewId
            const bookId = req.params.bookId
            await BookService.deleteReviewOfBook(reviewId, userId, bookId)
            res.status(200).send('Deleted Successfully')
        } catch (err) {
            next(err)
        }
    }
}

export default BookController;