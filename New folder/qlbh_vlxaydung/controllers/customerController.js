import connection from '../config/db.js';

export const getCustomers = async (req, res) => {
    try {
        const [rows] = await connection.execute('SELECT * FROM khachhang');
        res.render('customers', { customers: rows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getCustomerDetails = async (req, res) => {
    try {
        const [rows] = await connection.execute('SELECT * FROM khachhang WHERE ma_kh = ?', [req.params.id]);
        res.render('customer-details', { customer: rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const createCustomer = async (req, res) => {
    try {
        const [result] = await connection.execute(
            'INSERT INTO khachhang (ma_kh, ten_kh, sdt, dia_chi, email, ngaysinh) VALUES (?, ?, ?, ?, ?, ?)',
            [req.body.ma_kh, req.body.ten_kh, req.body.sdt, req.body.dia_chi, req.body.email, req.body.ngaysinh]
        );

        res.redirect(`/customer/${result.insertId}`);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Bad Request' });
    }
};

export const getEditCustomer = async (req, res) => {
    try {
        const [rows] = await connection.execute('SELECT * FROM khachhang WHERE ma_kh = ?', [req.params.id]);
        res.render('edit-customer', { customer: rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const updateCustomer = async (req, res) => {
    try {
        await connection.execute(
            'UPDATE khachhang SET ten_kh = ?, sdt = ?, dia_chi = ?, email = ?, ngaysinh = ? WHERE ma_kh = ?',
            [req.body.ten_kh, req.body.sdt, req.body.dia_chi, req.body.email, req.body.ngaysinh, req.params.id]
        );

        res.redirect(`/customer/${req.params.id}`);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Bad Request' });
    }
};

export const deleteCustomer = async (req, res) => {
    try {
        await connection.execute('DELETE FROM khachhang WHERE ma_kh = ?', [req.params.id]);
        res.redirect('/customers');
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};