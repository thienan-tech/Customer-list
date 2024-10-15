/*const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const PriceList = sequelize.define('PriceList', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ma_vtu: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false
    },
    ten_vtu: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    dvt: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    don_gia: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false
    },
    kl_ton: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'banggia',
    timestamps: true
});

module.exports = PriceList;