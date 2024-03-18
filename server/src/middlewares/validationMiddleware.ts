import { Request, Response, NextFunction } from "express"
import { Schema } from "yup"
export default function validator(schema: Schema) {
    return async (req:Request, res:Response, next:NextFunction) => {
        try {
            let validated = await schema.validate(req.body, {abortEarly:false})
            req.body = validated
            next()
        } catch (err:any) {
            return res.status(400).send({errors:err.errors})
            
        }
    }

}