import { QueryTypes, literal } from "sequelize";
import DB from "../../models";
import { DatabasePaginateOptions } from "../interfaces/base.type";

const db = DB.getInstance()
class BookRepository {


    static getAllBooks = async (options: DatabasePaginateOptions): Promise<{ count: number, rows: any[] }> => {
        const { offset, limit } = options
        const count = await db.Book.count()
        const rows = await db.sequelize.query(`
        SELECT *
        FROM (
            SELECT b."bookId", b."image", b."description",b."name",b."publisher", COALESCE(AVG(r.rating), 0) AS rating
            FROM books AS b
            LEFT JOIN reviews AS r ON b."bookId" = r."bookId"
            GROUP BY b."bookId"
        ) AS grouped_books
        ORDER BY grouped_books."bookId"
        OFFSET :offset
        LIMIT :limit
    `, {
        replacements: { offset, limit },
        type: QueryTypes.SELECT
    });
        return { count, rows }
    }


    static getBookById = async (bookId: string) => {
        const data = (await db.Book.findByPk(bookId,{
            attributes:{exclude:["updatedAt","deletedAt","createdAt"]},
            include:[{
                model:db.User,
                through: { attributes: [] },
                attributes:{exclude:["updatedAt","deletedAt","createdAt","password"]},
            }]
        })).dataValues
        if (!data) {
            return null
        }
        const rating = await db.Review.findOne({
            attributes: [
                [
                    literal('COALESCE(AVG(rating), 0)'),
                    'rating'
                ]
            ],
            where: { bookId }
        });

        data.rating = rating.rating
        return data
    }
}
export default BookRepository;