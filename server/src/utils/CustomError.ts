export default class CustomError extends Error{
    public statusCode:number;
    constructor(message:string, statusCode?:number){
        super(message)
        this.message = message
        this.name = "CustomError";
        this.statusCode = statusCode || 500;
        Error.captureStackTrace(this, this.constructor);
    }
}