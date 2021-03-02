const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Teachers = sequelize.define("teachers", {
        first_name: {
            type: DataTypes.STRING,
            unique: 'compositeIndex'
        },
        last_name: {
            type: DataTypes.STRING,
            unique: 'compositeIndex'
        },
        date_of_birth: {
            type: DataTypes.DATEONLY
        },
        age: {
            type: DataTypes.INTEGER
        },
        country: {
            type: DataTypes.STRING
        }
    });

    return Teachers;
};