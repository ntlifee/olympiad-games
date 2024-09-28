const sequelize = require('./../database')
const { DataTypes } = require('sequelize')

const User_role = sequelize.define('user_role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

module.exports = User_role;

