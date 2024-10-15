class Customer {
    constructor(id, code, name, phone, address, email, birthDate) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.email = email;
        this.birthDate = birthDate;
    }

    static async getAll(connection) {
        const [rows] = await connection.execute('SELECT * FROM khachhang');
        return rows.map(
            (row) =>
                new Customer(
                    row.id,
                    row.ma_kh,
                    row.ten_kh,
                    row.sdt,
                    row.dia_chi,
                    row.email,
                    row.ngaysinh
                )
        );
    }

    static async getByCode(connection, code) {
        const [rows] = await connection.execute(
            'SELECT * FROM khachhang WHERE ma_kh = ?',
            [code]
        );
        if (rows.length === 0) {
            return null;
        }
        const [row] = rows;
        return new Customer(
            row.id,
            row.ma_kh,
            row.ten_kh,
            row.sdt,
            row.dia_chi,
            row.email,
            row.ngaysinh
        );
    }

    async save(connection) {
        if (this.id) {
            await connection.execute(
                'UPDATE khachhang SET ten_kh = ?, sdt = ?, dia_chi = ?, email = ?, ngaysinh = ? WHERE ma_kh = ?',
                [this.name, this.phone, this.address, this.email, this.birthDate, this.code]
            );
        } else {
            const [result] = await connection.execute(
                'INSERT INTO khachhang (ma_kh, ten_kh, sdt, dia_chi, email, ngaysinh) VALUES (?, ?, ?, ?, ?, ?)',
                [this.code, this.name, this.phone, this.address, this.email, this.birthDate]
            );
            this.id = result.insertId;
        }
    }

    async delete(connection) {
        await connection.execute('DELETE FROM khachhang WHERE ma_kh = ?', [this.code]);
    }
}

export default Customer;