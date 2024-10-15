/*import connection from "../config/db.js";

export const getInvoices = async (req, res) => {
    try {
        const [rows] = await connection.execute('SELECT * FROM hoadon');
        res.render('invoices', { invoices: rows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getInvoiceDetails = async (req, res) => {
    try {
        const [invoiceRows] = await connection.execute('SELECT * FROM hoadon WHERE id = ?', [req.params.id]);
        const [itemRows] = await connection.execute('SELECT * FROM ct_hoadon WHERE ma_dh = ?', [req.params.id]);

        res.render('invoice-details', { invoice: invoiceRows[0], items: itemRows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const createInvoice = async (req, res) => {
    try {
        const [result] = await connection.execute(
            'INSERT INTO hoadon (ma_kh, tong_dh, cong_no, ma_hd) VALUES (?, ?, ?, ?)',
            [req.body.ma_kh, req.body.tong_dh, req.body.cong_no, req.body.ma_hd]
        );

        res.redirect(`/invoice/${result.insertId}`);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Bad Request' });
    }
};

// Add more functions for updating and deleting invoices