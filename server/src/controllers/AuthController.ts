import { NextFunction, Request, Response } from "express"
import UserService from "../services/UserService";
class AuthController{
    static signUp = async(req:Request, res:Response, next: NextFunction)=>{
        try{
            const data = req.body;
            let user = await UserService.signUpUser(data)
            res.status(200).send(user)
        }catch(err){
            next(err)
        }

    }
    static signIn = async(req:Request, res:Response, next: NextFunction)=>{
        try{
            const {email, password} = req.body;
            let token = await UserService.signInUser(email, password)
            res.status(200).send({token})
        }catch(err){
            next(err)
        }
    }
    static getUser = async(req:Request, res:Response, next: NextFunction)=>{
        try{
            res.status(200).send({user: req.context.user})
        }catch(err){
            next(err)
        }
    }
}

export default AuthController;