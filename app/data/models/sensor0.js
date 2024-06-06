import { DataTypes } from "sequelize";

const tableName = "sensor0";

const table = {
    recordid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
    deviceid: {
        type: DataTypes.STRING,
        allowNull: false
    },
    t: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    h: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    hi: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
}

export default {
    tableName, table
}