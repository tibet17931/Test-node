const { Sequelize } = require('sequelize');
const clog = require('clog');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: msg => clog.debug(msg),
    define: {
        freezeTableName: true
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.teachers = require("./teacher.models")(sequelize, Sequelize);
db.course = require("./course.models")(sequelize, Sequelize);

module.exports = db;