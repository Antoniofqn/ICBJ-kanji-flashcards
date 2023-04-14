const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Flashcard extends Model {}

Flashcard.init({
    front: {
        type: DataTypes.STRING,
        allowNull: false
    },
    back: {
        type: DataTypes.STRING,
        allowNull: false
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Flashcard',
    timestamps: false
});

module.exports = Flashcard;
