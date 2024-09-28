const sequelize = require('./../database')
const { DataTypes } = require('sequelize')

const User = require('./user.js')
const Role = require('./role.js')
const User_role = require('./user_role.js')
const Game = require('./game.js')
const Access_game = require('./access_game.js')
const Square_answer = require('./square_answer.js')
const Carousel_answer = require('./carousel_answer.js')
const Carousel_data = require('./carousel_data.js')
const Question = require('./question.js')
const Square_theme = require('./square_theme.js')

const User_square_answer = sequelize.define('user_square_answer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})
const User_carousel_answer = sequelize.define('user_carousel_answer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})
const Role_access_game = sequelize.define('role_access_game', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

User.hasMany(User_role)
User_role.belongsTo(User)
Game.hasMany(Question)
Question.belongsTo(Game)
Game.hasMany(Square_theme)
Square_theme.belongsTo(Game)
Game.hasOne(Carousel_data)
Carousel_data.belongsTo(Game)
Game.hasMany(Access_game)
Access_game.belongsTo(Game)
Game.hasMany(User_carousel_answer)
User_carousel_answer.belongsTo(Game)
Game.hasMany(User_square_answer)
User_square_answer.belongsTo(Game)
Role.hasMany(User_role)
User_role.belongsTo(Role)

User.belongsToMany(Square_answer, { through: User_square_answer })
Square_answer.belongsToMany(User, { through: User_square_answer })

User.belongsToMany(Carousel_answer, { through: User_carousel_answer })
Carousel_answer.belongsToMany(User, { through: User_carousel_answer })

Role.belongsToMany(Access_game, { through: Role_access_game })
Access_game.belongsToMany(Role, { through: Role_access_game })




module.exports = {
    User, Role, User_role, Game, Access_game,
    Square_answer, Carousel_answer, Carousel_data,
    Question, Square_theme, User_carousel_answer, User_square_answer, Role_access_game
}

