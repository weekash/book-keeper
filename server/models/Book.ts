import { DataTypes, Sequelize } from "sequelize";

export function initBook(sequelize: Sequelize) {
    const Book = sequelize.define("books",
        {
            bookId: {
                type: DataTypes.UUID(),
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            publisher: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
            },
            description: {
                type: DataTypes.STRING
            },
        },
        {
            tableName: "books",
            modelName: "Book",
            freezeTableName: true,
            paranoid: true,
            timestamps: true
        });
    return Book;
}