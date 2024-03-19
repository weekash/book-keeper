import axios from "axios"
import { AxiosResponseType, Review } from "../interface/base.type"

export const BOOK_URL=`/api/books`


export async function getAllReviewsForBook(bookId:string, page:number, limit:number):Promise<AxiosResponseType<Review[]>>{
    return await axios.get(`${BOOK_URL}/${bookId}/reviews`,{params:{page,limit}})
}

export async function addReviewForBook(bookId:string, rating:number, review:string):Promise<AxiosResponseType<Review>>{
    return await axios.post(`${BOOK_URL}/${bookId}/reviews`, {rating,review})
}

export async function updateReviewForBook(reviewId:string, bookId:string, rating:number, review:string):Promise<AxiosResponseType<Review>>{
    return await axios.post(`${BOOK_URL}/${bookId}/reviews/${reviewId}`, {rating,review})
}