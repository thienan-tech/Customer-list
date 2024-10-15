import connection from '../db.js';

export const getInvoiceDetails = (invoiceId, callback) => {
    connection.query('SELECT * FROM invoice_details WHERE invoice_id = ?', [invoiceId], (error, invoiceDetails) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, invoiceDetails);
        }
    });
};

export const createInvoiceDetail = (invoiceId, detail, callback) => {
    const { item, quantity, price } = detail;
    connection.query('INSERT INTO invoice_details (invoice_id, item, quantity, price) VALUES (?, ?, ?, ?)', [invoiceId, item, quantity, price], (error, result) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, { id: result.insertId, invoice_id: invoiceId, item, quantity, price });
        }
    });
};

export const updateInvoiceDetail = (invoiceId, id, detail, callback) => {
    const { item, quantity, price } = detail;
    connection.query('UPDATE invoice_details SET item = ?, quantity = ?, price = ? WHERE id = ? AND invoice_id = ?', [item, quantity, price, id, invoiceId], (error, result) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, { id, invoice_id: invoiceId, item, quantity, price });
        }
    });
};

export const deleteInvoiceDetail = (invoiceId, id, callback) => {
    connection.query('DELETE FROM invoice_details WHERE id = ? AND invoice_id = ?', [id, invoiceId], (error, result) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, { id });
        }
    });
};