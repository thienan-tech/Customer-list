import connection from '../db.js';

export const getCustomers = (callback) => {
    connection.query('SELECT * FROM khachhang', (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
};

export const getCustomerById = (id, callback) => {
    connection.query('SELECT * FROM khachhang WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results[0]);
        }
    });
};

export const createCustomer = (data, callback) => {
    connection.query('INSERT INTO khachhang (ma_kh, ten_kh, sdt, dia_chi, email, ngaysinh) VALUES (?, ?, ?, ?, ?, ?)', [data.ma_kh, data.ten_kh, data.sdt, data.dia_chi, data.email, data.ngaysinh], (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, { id: results.insertId, ...data });
        }
    });
};

export const updateCustomer = (id, data, callback) => {
    connection.query('UPDATE khachhang SET ma_kh = ?, ten_kh = ?, sdt = ?, dia_chi = ?, email = ?, ngaysinh = ? WHERE id = ?', [data.ma_kh, data.ten_kh, data.sdt, data.dia_chi, data.email, data.ngaysinh, id], (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, { id, ...data });
        }
    });
};

export const deleteCustomer = (id, callback) => {
    connection.query('DELETE FROM khachhang WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, { id });
        }
    });
};