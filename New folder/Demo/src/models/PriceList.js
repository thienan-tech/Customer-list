class PriceList {
    constructor(id, code, name, unit, price, stock) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.unit = unit;
        this.price = price;
        this.stock = stock;
    }

    static async getAll(connection) {
        const [rows] = await connection.execute('SELECT * FROM banggia');
        return rows.map(
            (row) =>
                new PriceList(
                    row.id,
                    row.ma_vtu,
                    row.ten_vtu,
                    row.dvt,
                    row.don_gia,
                    row.kl_ton
                )
        );
    }

    static async getByCode(connection, code) {
        const [rows] = await connection.execute(
            'SELECT * FROM banggia WHERE ma_vtu = ?',
            [code]
        );
        if (rows.length === 0) {
            return null;
        }
        const [row] = rows;
        return new PriceList(
            row.id,
            row.ma_vtu,
            row.ten_vtu,
            row.dvt,
            row.don_gia,
            row.kl_ton
        );
    }

    async save(connection) {
        if (this.id) {
            await connection.execute(
                'UPDATE banggia SET ten_vtu = ?, dvt = ?, don_gia = ?, kl_ton = ? WHERE ma_vtu = ?',
                [this.name, this.unit, this.price, this.stock, this.code]
            );
        } else {
            const [result] = await connection.execute(
                'INSERT INTO banggia (ma_vtu, ten_vtu, dvt, don_gia, kl_ton) VALUES (?, ?, ?, ?, ?)',
                [this.code, this.name, this.unit, this.price, this.stock]
            );
            this.id = result.insertId;
        }
    }

    async delete(connection) {
        await connection.execute('DELETE FROM banggia WHERE ma_vtu = ?', [this.code]);
    }
}

export default PriceList;