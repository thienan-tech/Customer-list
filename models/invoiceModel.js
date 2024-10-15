import connection from '../db.js';

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
    connection.query('SELECT * FROM hoadon WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results[0]);
        }
    });
};

export const createInvoice = (data, callback) => {
    connection.query('INSERT INTO hoadon (ma_kh, tong_dh, cong_no, ma_hd) VALUES (?, ?, ?, ?)', [data.ma_kh, data.tong_dh, data.cong_no, data.ma_hd], (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, { id: results.insertId, ...data });
        }
    });
};

export const updateInvoice = (id, data, callback) => {
    connection.query('UPDATE hoadon SET ma_kh = ?, tong_dh = ?, cong_no = ?, ma_hd = ? WHERE id = ?', [data.ma_kh, data.tong_dh, data.cong_no, data.ma_hd, id], (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, { id, ...data });
        }
    });
};

export const deleteInvoice = (id, callback) => {
    connection.query('DELETE FROM hoadon WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, { id });
        }
    });
};

export const getInvoiceDetails = (invoiceId, callback) => {
    connection.query('SELECT * FROM ct_hoadon WHERE ma_dh = ?', [invoiceId], (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
};

export const createInvoiceDetail = (data, callback) => {
    connection.query('INSERT INTO ct_hoadon (ma_dh, ma_vtu, ten_vtu, dvt, so_luong, don_gia, thanh_tien, ghi_chu) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [data.ma_dh, data.ma_vtu, data.ten_vtu, data.dvt, data.so_luong, data.don_gia, data.thanh_tien, data.ghi_chu], (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, { id: results.insertId, ...data });
        }
    });
};

export const updateInvoiceDetail = (id, data, callback) => {
    connection.query('UPDATE ct_hoadon SET ma_dh = ?, ma_vtu = ?, ten_vtu = ?, dvt = ?, so_luong = ?, don_gia = ?, thanh_tien = ?, ghi_chu = ? WHERE id = ?', [data.ma_dh, data.ma_vtu, data.ten_vtu, data.dvt, data.so_luong, data.don_gia, data.thanh_tien, data.ghi_chu, id], (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, { id, ...data });
        }
    });
};

export const deleteInvoiceDetail = (id, callback) => {
    connection.query('DELETE FROM ct_hoadon WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, { id });
        }
    });
};