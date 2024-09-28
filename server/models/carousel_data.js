const sequelize = require('./../database')
const { DataTypes } = require('sequelize')

const Carousel_data = sequelize.define('carousel_data', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    scoreFirst: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    scoreSuccess: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    scoreFailure: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Carousel_data