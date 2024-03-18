import { Request, Response, NextFunction } from 'express';
import { validateJWT } from '../utils/JWT';


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({  errors: ['Unauthorized: Missing JWT token'] });
    }

    const user = validateJWT(token)
    req.context = req.context || {};
    req.context["user"] = user
    next()
};
