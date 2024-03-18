import { DataTypes, Sequelize } from "sequelize";

export function initReview(sequelize:Sequelize) {
    const Review = sequelize.define("reviews",
        {
            reviewId: {
                type: DataTypes.UUID(),
                primaryKey: true,
            },
            bookId: {
                type: DataTypes.UUID(),
               allowNull:false,
            },
            userId: {
                type: DataTypes.UUID(),
               allowNull:false,
            },
            review: {
                type: DataTypes.STRING,
            },
            rating: {
                type: DataTypes.FLOAT,
            },
         
        },
        {
            tableName:"reviews",
            modelName:"Review",
            freezeTableName:true,
            paranoid: true,
            timestamps: true
        });
    return Review;
}