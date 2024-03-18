import BookRepository from '../repositories/BookRepostitory';
import { PaginateOptions } from '../interfaces/base.type';
import ReviewRepository from '../repositories/ReviewRepository';
import { AddReviewOptions, UpdateReviewOptions } from '../interfaces/review.type';
import { randomUUID } from 'crypto';
import CustomError from '../utils/CustomError';

export interface User {
    name: string;
    email: string;
    password: string;
}

class BookService {

    static getAllBooks = async (options: PaginateOptions) => {
        const { limit, page } = options
        return await BookRepository.getAllBooks({ limit, offset: (page - 1) * limit })
    }

    static getBookById = async (bookId: string, userId?: string) => {
        let review = await BookRepository.getBookById(bookId)
        let userReview;
        if (userId) {
            userReview = await ReviewRepository.getReviewByOptions({ bookId, userId })
        }
        review.userReview = userReview
        return review
    }

    static getAllReviewsOfBook = async (bookId:string, options: PaginateOptions) => {
        const { limit, page } = options
        return await ReviewRepository.getAllReviews(bookId, { limit, offset: (page - 1) * limit })
    }

    static addReviewToBook = async(data:AddReviewOptions)=>{
        // check if review exists
        const review = await ReviewRepository.getReviewByOptions({userId: data.userId, bookId: data.bookId})
        if(review){
            throw new CustomError("You have already added a review to this book", 400)
        }
        data.reviewId =randomUUID()
        return await ReviewRepository.createReview(data)

    }

    static updateReviewOfBook = async(reviewId:string, userId:string, data:UpdateReviewOptions)=>{
        return await ReviewRepository.updateReview(reviewId, userId, data)
    }

    static deleteReviewOfBook = async(reviewId:string, userId:string, bookId:string)=>{
        let review = await ReviewRepository.getReviewByOptions({reviewId, userId, bookId})
        if(!review){
            throw new CustomError("Review not found",404)
        }
        return await ReviewRepository.deleteReview(reviewId, userId)
    }
}

export default BookService;