import connection from "../db.js";

export const getInvoices = (callback) => {
    connection.query('SELECT * FROM hoadon', (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
};

export const getInvoiceById = (id, callback) => {
    connection.query('SELECT * FROM hoadon WHERE id = ?', [id], (error, rows, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, rows[0]);
        }
    });
};

export const createInvoice = (invoice, callback) => {
    const { ma_kh, tong_dh, cong_no, ma_hd } = invoice;
    connection.query('INSERT INTO hoadon (ma_kh, tong_dh, cong_no, ma_hd) VALUES (?, ?, ?, ?)', [ma_kh, tong_dh, cong_no, ma_hd], (error, result) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, { id: result.insertId, ...invoice });
        }
    });
};

export const updateInvoice = (id, invoice, callback) => {
    const { ma_kh, tong_dh, cong_no, ma_hd } = invoice;
    connection.query('UPDATE hoadon SET ma_kh = ?, tong_dh = ?, cong_no = ?, ma_hd = ? WHERE id = ?', [ma_kh, tong_dh, cong_no, ma_hd, id], (error, result) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, { id, ...invoice });
        }
    });
};

export const deleteInvoice = (id, callback) => {
    connection.query('DELETE FROM hoadon WHERE id = ?', [id], (error, result) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, { id });
        }
    });
};