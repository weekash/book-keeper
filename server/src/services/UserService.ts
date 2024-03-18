import {randomUUID} from 'crypto';
import UserRepository from "../repositories/UserRepository";
import { compareHash, createHash } from '../utils/Crypto';
import CustomError from '../utils/CustomError';
import { createJWT } from '../utils/JWT';
export interface User{
    name:string;
    email:string;
    password:string;
}

class UserService {

    static signUpUser=async(user:User)=>{
        //check if user exits
        const existingUser = await UserRepository.getUserByEmail(user.email)
        if(existingUser){
            throw new CustomError("User already exists", 400)
        }
        user.password = createHash(user.password)
        return await UserRepository.createUser({
            userId: randomUUID(),
            image: `https://api.dicebear.com/8.x/fun-emoji/svg?seed=${user.name}`,
            ...user
        })
    }

    static signInUser=async(email:string, password:string)=>{
        //find user by email
        const user = await UserRepository.getUserByEmail(email)
        if(!user){
            throw new CustomError("Invalid Credentials", 401)
        }
        // validate password
        if(compareHash(password, user.password)){
        return createJWT({
            userId: user.userId,
            email: user.email,
            image: user.image
        })
    }else{
        throw new CustomError("Invalid Credentials", 401)
    }
    }
}

export default UserService;