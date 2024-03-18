import { NextFunction, Request, Response } from "express"

export default function errorHandler(err:any, req:Request, res:Response, next:NextFunction) {
    console.log(err.statusCode)
    if (err.name=="CustomError") {
        return res.status(err?.statusCode || 500).json({  errors: [err.message] })
    } else {
        console.log(err)
        return res.status(500).json({ errors: ["Server Error"] })
    }
}