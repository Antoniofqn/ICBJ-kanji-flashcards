const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Flashcard extends Model {}

Flashcard.init({
    front: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Front field is required'
          }
        }
    },
    back: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Back field is required'
          }
        }
    },
    level: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Level field is required'
          }
        }
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Level type is required'
          }
        }
    }
}, {
    sequelize,
    modelName: 'Flashcard',
    timestamps: false
});

module.exports = Flashcard;
