const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Customer = sequelize.define('Customer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ma_kh: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false
    },
    ten_kh: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    sdt: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    dia_chi: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    ngaysinh: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    tableName: 'khachhang',
    timestamps: true
});

module.exports = Customer;