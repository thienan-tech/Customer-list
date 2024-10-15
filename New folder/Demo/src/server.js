import express from 'express';
import bodyParser from 'body-parser';
import customerRoutes from './routes/customerRoutes.js';
import priceListRoutes from './routes/priceListRoutes.js';
import invoiceRoutes from './routes/invoiceRoutes.js';
//import invoiceDetailRoutes from './routes/invoiceDetailRoutes.js';
import mysql from 'mysql2/promise';

const app = express();

// Sử dụng bodyParser để parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Định nghĩa các route
app.use('/api/customers', customerRoutes);
app.use('/api/price-lists', priceListRoutes);
app.use('/api/invoices', invoiceRoutes);
//app.use('/api/invoice-details', invoiceDetailRoutes);

// Kết nối đến cơ sở dữ liệu
const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Daodinh@123456',
    database: 'qlbh_vlxaydung'
});

try {
    await connection.connect();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// Xử lý lỗi
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});