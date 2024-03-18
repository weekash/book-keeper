import DB from "../../models";

interface CreateUser {
    userId: string;
    name: string;
    email: string;
    password: string;
    image?:string;
}
const db = DB.getInstance()
class UserRepository {
    static createUser = async (user: CreateUser) => {
        return await db.User.create({ ...user })
    }
    static getUserById = async (userId: string) => {
        return await db.User.findByPk(userId)
    }
    static getUserByEmail = async (email: string)=> {
        return await db.User.findOne({
            where: { email }
        })
    }
}

export default UserRepository;