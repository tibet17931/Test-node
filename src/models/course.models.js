const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
        course_name: {
            type: DataTypes.STRING,
            unique: 'compositeIndex'
        },
        course_description: {
            type: DataTypes.STRING
        },
        course_length: {
            type: DataTypes.INTEGER
        },
        language: {
            type: DataTypes.STRING
        }
    });

    return Course;
};