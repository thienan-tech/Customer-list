class Invoice {
    constructor(id, customerCode, totalOrder, debt, code) {
        this.id = id;
        this.customerCode = customerCode;
        this.totalOrder = totalOrder;
        this.debt = debt;
        this.code = code;
    }

    static async getAll(connection) {
        const [rows] = await connection.execute('SELECT * FROM hoadon');
        return rows.map(
            (row) =>
                new Invoice(
                    row.id,
                    row.ma_kh,
                    row.tong_dh,
                    row.cong_no,
                    row.ma_hd
                )
        );
    }

    static async getByCode(connection, code) {
        const [rows] = await connection.execute(
            'SELECT * FROM hoadon WHERE ma_hd = ?',
            [code]
        );
        if (rows.length === 0) {
            return null;
        }
        const [row] = rows;
        return new Invoice(
            row.id,
            row.ma_kh,
            row.tong_dh,
            row.cong_no,
            row.ma_hd
        );
    }

    async save(connection) {
        if (this.id) {
            await connection.execute(
                'UPDATE hoadon SET tong_dh = ?, cong_no = ? WHERE ma_hd = ?',
                [this.totalOrder, this.debt, this.code]
            );
        } else {
            const [result] = await connection.execute(
                'INSERT INTO hoadon (ma_kh, tong_dh, cong_no, ma_hd) VALUES (?, ?, ?, ?)',
                [this.customerCode, this.totalOrder, this.debt, this.code]
            );
            this.id = result.insertId;
        }
    }

    async delete(connection) {
        await connection.execute('DELETE FROM hoadon WHERE ma_hd = ?', [this.code]);
    }
}

export default Invoice;