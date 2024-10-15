class InvoiceDetail {
    constructor(
        id,
        invoiceId,
        productCode,
        productName,
        unit,
        quantity,
        price,
        amount,
        note
    ) {
        this.id = id;
        this.invoiceId = invoiceId;
        this.productCode = productCode;
        this.productName = productName;
        this.unit = unit;
        this.quantity = quantity;
        this.price = price;
        this.amount = amount;
        this.note = note;
    }

    static async getByInvoiceId(connection, invoiceId) {
        const [rows] = await connection.execute(
            'SELECT * FROM ct_hoadon WHERE ma_dh = ?',
            [invoiceId]
        );
        return rows.map(
            (row) =>
                new InvoiceDetail(
                    row.id,
                    row.ma_dh,
                    row.ma_vtu,
                    row.ten_vtu,
                    row.dvt,
                    row.so_luong,
                    row.don_gia,
                    row.thanh_tien,
                    row.ghi_chu
                )
        );
    }

    async save(connection) {
        if (this.id) {
            await connection.execute(
                'UPDATE ct_hoadon SET so_luong = ?, don_gia = ?, thanh_tien = ?, ghi_chu = ? WHERE id = ?',
                [this.quantity, this.price, this.amount, this.note, this.id]
            );
        } else {
            const [result] = await connection.execute(
                'INSERT INTO ct_hoadon (ma_dh, ma_vtu, ten_vtu, dvt, so_luong, don_gia, thanh_tien, ghi_chu) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [
                    this.invoiceId,
                    this.productCode,
                    this.productName,
                    this.unit,
                    this.quantity,
                    this.price,
                    this.amount,
                    this.note
                ]
            );
            this.id = result.insertId;
        }
    }

    async delete(connection) {
        await connection.execute('DELETE FROM ct_hoadon WHERE id = ?', [this.id]);
    }
}

export default InvoiceDetail;