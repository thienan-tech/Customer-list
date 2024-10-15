/*import connection from "../config/db.js";

export const getPriceList = async (req, res) => {
    try {
        const [rows] = await connection.execute('SELECT * FROM banggia');
        res.render('price-list', { priceList: rows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const createPriceListItem = async (req, res) => {
    try {
        const [result] = await connection.execute(
            'INSERT INTO banggia (ma_vtu, ten_vtu, dvt, don_gia, kl_ton) VALUES (?, ?, ?, ?, ?)',
            [req.body.ma_vtu, req.body.ten_vtu, req.body.dvt, req.body.don_gia, req.body.kl_ton]
        );

        res.redirect('/price-list');
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Bad Request' });
    }
};

export const getEditPriceListItem = async (req, res) => {
    try {
        const [rows] = await connection.execute('SELECT * FROM banggia WHERE id = ?', [req.params.id]);
        res.render('edit-price-list-item', { priceListItem: rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const updatePriceListItem = async (req, res) => {
    try {
        await connection.execute(
            'UPDATE banggia SET ma_vtu = ?, ten_vtu = ?, dvt = ?, don_gia = ?, kl_ton = ? WHERE id = ?',
            [req.body.ma_vtu, req.body.ten_vtu, req.body.dvt, req.body.don_gia, req.body.kl_ton, req.params.id]
        );

        res.redirect('/price-list');
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Bad Request' });
    }
};

export const deletePriceListItem = async (req, res) => {
    try {
        await connection.execute('DELETE FROM banggia WHERE id = ?', [req.params.id]);
        res.redirect('/price-list');
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getPriceList = async (req, res) => {
    try {
        const [rows] = await connection.execute('SELECT * FROM banggia');
        res.render('price-list', { priceList: rows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const createPriceListItem = async (req, res) => {
    try {
        const [result] = await connection.execute(
            'INSERT INTO banggia (ma_vtu, ten_vtu, dvt, don_gia, kl_ton) VALUES (?, ?, ?, ?, ?)',
            [req.body.ma_vtu, req.body.ten_vtu, req.body.dvt, req.body.don_gia, req.body.kl_ton]
        );

        res.redirect('/price-list');
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Bad Request' });
    }
};

export const getEditPriceListItem = async (req, res) => {
    try {
        const [rows] = await connection.execute('SELECT * FROM banggia WHERE id = ?', [req.params.id]);
        res.render('edit-price-list-item', { priceListItem: rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const updatePriceListItem = async (req, res) => {
    try {
        await connection.execute(
            'UPDATE banggia SET ma_vtu = ?, ten_vtu = ?, dvt = ?, don_gia = ?, kl_ton = ? WHERE id = ?',
            [req.body.ma_vtu, req.body.ten_vtu, req.body.dvt, req.body.don_gia, req.body.kl_ton, req.params.id]
        );

        res.redirect('/price-list');
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Bad Request' });
    }
};

export const deletePriceListItem = async (req, res) => {
    try {
        await connection.execute('DELETE FROM banggia WHERE id = ?', [req.params.id]);
        res.redirect('/price-list');
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};