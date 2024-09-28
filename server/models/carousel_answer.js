const sequelize = require('./../database')
const { DataTypes } = require('sequelize')

const Carousel_answer = sequelize.define('carousel_answer', {
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
    },
    correct: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
})

module.exports = Carousel_answer;