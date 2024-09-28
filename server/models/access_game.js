const sequelize = require('./../database')
const { DataTypes } = require('sequelize')

const Access_game = sequelize.define('access_game', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

module.exports = Access_game