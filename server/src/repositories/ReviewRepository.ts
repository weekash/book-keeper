import DB from "../../models";
import { DatabasePaginateOptions } from "../interfaces/base.type";
import { AddReviewOptions, GetReviewOptions, UpdateReviewOptions } from "../interfaces/review.type";

const db = DB.getInstance()
class ReviewRepository {

    static getReviewById = async (reviewId: string) => {
        return await db.Review.findByPk(reviewId)
    }
    static getReviewByOptions = async (options: GetReviewOptions) => {
        return await db.Review.findOne({
            where: { ...options },
        })
    }

    static getAllReviews = async (bookId: string, options: DatabasePaginateOptions) => {
        const { limit, offset } = options
        return await db.Review.findAll({
            where: {
                bookId,
            },
            limit,
            offset
        })
    }

    static createReview = async(data:AddReviewOptions)=>{
        return await db.Review.create(data)
    }

    static updateReview = async(reviewId:string, userId:string, data:UpdateReviewOptions)=>{
        return await db.Review.update(data, {where:{reviewId, userId}})
    }
    static deleteReview = async(reviewId:string, userId:string)=>{
        return await db.Review.destroy({where:{reviewId, userId}})
    }

}

export default ReviewRepository;