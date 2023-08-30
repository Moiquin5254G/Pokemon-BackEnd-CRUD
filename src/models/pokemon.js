const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Pokemon', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        image: {
            type: DataTypes.STRING
        },
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 50,
            validate: {
                min: 1,
                max: 100
            }
        },
        attack: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 50,
            validate: {
                min: 1,
                max: 100
            }
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 50,
            validate: {
                min: 1,
                max: 100
            }
        },
        speed: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 50,
            validate: {
                min: 1,
                max: 100
            }
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 500,
            validate: {
                min: 1,
                max: 1000
            }
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 500,
            validate: {
                min: 1,
                max: 1000
            }
        },
        created: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, { timestamps: false });
};