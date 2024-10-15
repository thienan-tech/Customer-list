/*const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Customer = require('./Customer');

const Invoice = sequelize.define('Invoice', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ma_kh: {
        type: Sequelize.STRING(50),
        allowNull: false,
        references: {
            model: Customer,
            key: 'ma_kh'
        }
    },
    tong_dh: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false
    },
    cong_no: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false
    },
    ma_hd: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'hoadon',
    timestamps: true
});

Invoice.belongsTo(Customer, { foreignKey: 'ma_kh' });

module.exports = Invoice;