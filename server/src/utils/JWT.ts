import jwt from 'jsonwebtoken';
import CustomError from './CustomError';

const secretKey:string = process.env.JWT_SECRET_KEY!

export function createJWT(payload: any, options?: jwt.SignOptions): string {
    return jwt.sign(payload, secretKey, options);
}

export function validateJWT(token: string): any {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        throw new CustomError("Invalid Token", 401)
    }
}
