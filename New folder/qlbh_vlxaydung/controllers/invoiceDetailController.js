/*import { connection } from '../config/db.js';

export const getInvoiceDetails = async (req, res) => {
    try {
        // Fetch invoice details
        const [invoiceRows] = await connection.execute(
            'SELECT h.id, h.ma_hd, h.tong_dh, h.cong_no, k.ten_kh, k.sdt, k.dia_chi
        FROM hoadon h
        JOIN khachhang k ON h.ma_kh = k.ma_kh
        WHERE h.id = ?',
            [req.params.id]
    );

        // Fetch invoice items
        const [itemRows] = await connection.execute(
            'SELECT c.id, c.ma_vtu, c.ten_vtu, c.dvt, c.so_luong, c.don_gia, c.thanh_tien, c.ghi_chu
        FROM ct_hoadon c
        WHERE c.ma_dh = ?',
            [req.params.id]
    );

        res.render('invoice-details', { invoice: invoiceRows[0], items: itemRows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};