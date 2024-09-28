const sequelize = require('./../database')
const { DataTypes } = require('sequelize')

const Square_theme = sequelize.define('square_theme', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Square_theme