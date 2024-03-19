import { Request, Response, NextFunction } from 'express';
import { validateJWT } from '../utils/JWT';


export const publicMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    let user;
    try {
        if (token) {
            user = validateJWT(token)
        }
    } catch (err) {

    }
    req.context = req.context || {};
    req.context["user"] = user
    next()
};
