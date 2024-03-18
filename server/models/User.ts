import { DataTypes, Model, Sequelize } from "sequelize";

export function initUser(sequelize:Sequelize){
    const User = sequelize.define("users",
        {
            userId: {
                type: DataTypes.UUID(),
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            image:{
                type: DataTypes.STRING
            },
        },
        {
            tableName:"users",
            modelName:"User",
            freezeTableName:true,
            paranoid: true,
            timestamps: true
        });
    return User;
}