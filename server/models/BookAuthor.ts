import { DataTypes, Sequelize } from "sequelize";

export function initBookAuthor(sequelize: Sequelize) {
    const BookAuthor = sequelize.define("book_authors",
        {
            bookAuthorId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            bookId: {
                type: DataTypes.UUID(),
                primaryKey: true,
                unique: "book_user_id_index"
            },
            userId: {
                type: DataTypes.UUID(),
                primaryKey: true,
                unique: "book_user_id_index"
            },
        },
        {
            tableName: "book_authors",
            modelName: "BookAuthor",
            freezeTableName: true,
            paranoid: true,
            timestamps: true
        });
    return BookAuthor;
}