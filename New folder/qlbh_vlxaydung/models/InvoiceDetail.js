/*const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Invoice = require('./Invoice');
const PriceList = require('./PriceList');

const InvoiceDetail = sequelize.define('InvoiceDetail', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ma_dh: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Invoice,
            key: 'id'
        }
    },
    ma_vtu: {
        type: Sequelize.STRING(50),
        allowNull: false,
        references: {
            model: PriceList,
            key: 'ma_vtu'
        }
    },
    ten_vtu: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    dvt: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    so_luong: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    don_gia: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false
    },
    thanh_tien: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false
    },
    ghi_chu: {
        type: Sequelize.STRING(255)
    }
}, {
    tableName: 'ct_hoadon',
    timestamps: true
});

InvoiceDetail.belongsTo(Invoice, { foreignKey: 'ma_dh' });
InvoiceDetail.belongsTo(PriceList, { foreignKey: 'ma_vtu' });

module.exports = InvoiceDetail;