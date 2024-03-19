import axios from "axios"
import { AxiosResponseType } from "../interface/base.type"

export const BOOK_URL=`/api/books`


export async function getAllBooks(page:number, limit:number):Promise<AxiosResponseType<any>>{
    return await axios.get(BOOK_URL,{params:{page,limit}})
}

export async function getBookById(bookId:string):Promise<AxiosResponseType<any>>{
    return await axios.get(`${BOOK_URL}/${bookId}`)
}