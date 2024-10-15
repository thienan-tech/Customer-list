import express from 'express';
import bodyParser from 'body-parser';
import customerRoutes from './routes/customerRoutes.js';
import priceListRoutes from './routes/priceListRoutes.js';
import invoiceRoutes from './routes/invoiceRoutes.js';
import { sequelize } from './config/db.js';
import Customer from "./models/Customer.js";
import PriceList from "./models/PriceList.js";
import Invoice from "./models/Invoice.js";
import mysql from 'mysql2/promise';

const app = express();

// Sử dụng bodyParser để parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/customers', async (req, res) => {
    const customers = await Customer.getAll(connection);
    res.render('CustomerView', { customers });
});

app.get('/invoices', async (req, res) => {
    const invoices = await Invoice.getAll(connection);
    res.render('InvoiceView', { invoices });
});

app.get('/price-lists', async (req, res) => {
    const priceLists = await PriceList.getAll(connection);
    res.render('PriceListView', { priceLists });
});

// Kết nối đến cơ sở dữ liệu
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// Định nghĩa các route
app.use('/api/customers', customerRoutes);
app.use('/api/price-lists', priceListRoutes);
app.use('/api/invoices', invoiceRoutes);

// Xử lý lỗi
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

export { app }; // Sử dụng export { app } thay vì export default app