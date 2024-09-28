const sequelize = require('../database')
const { DataTypes } = require('sequelize')

const Square_answer = sequelize.define('square_answer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    question_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    points: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Square_answer;