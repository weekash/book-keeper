import { Sequelize } from "sequelize"
import { initUser } from "./User";
import { initBook } from "./Book";
import { initReview } from "./Review";

export default class DB {
    public sequelize: Sequelize;
    public User:any;
    public Book:any;
    public Review:any;
    public BookAuthor:any;
    private static instance:DB;
    constructor() {
        this.sequelize = new Sequelize(
            process.env.DB_DATABASE!,
            process.env.DB_USERNAME!,
            process.env.DB_PASSWORD!,
            {
              host: process.env.DB_HOST!,
              port: +process.env.DB_PORT!,
              dialect: 'postgres', 
              logging: false, 
            }
          );
        initUser(this.sequelize);
        initBook(this.sequelize);
        initReview(this.sequelize);
        this.User = this.sequelize.models.users;
        this.Book = this.sequelize.models.books;
        this.Review = this.sequelize.models.reviews;
        this.BookAuthor = this.sequelize.models.book_authors;

        this.Book.hasMany(this.Review, {foreignKey:"bookId"})
        this.Book.belongsToMany(this.User, { through: 'book_authors', foreignKey:"bookId" });
        this.User.belongsToMany(this.Book, { through: 'book_authors', foreignKey:"userId" });
        this.Review.belongsTo(this.User, {foreignKey: "userId"})
        this.User.hasMany(this.Review, {foreignKey: "userId"})
    }

    static getInstance(): DB {
        if (!DB.instance) {
            DB.instance = new DB()
        }
        return DB.instance
    }
}