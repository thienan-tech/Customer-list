import PriceList from '../models/PriceList.js';


export const getAllPriceLists = async (req, res) => {
    try {
        const priceLists = await PriceList.findAll();
        res.json(priceLists);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getPriceListById = async (req, res) => {
    try {
        const priceList = await PriceList.findByPk(req.params.id);
        if (!priceList) {
            return res.status(404).json({ message: 'Price List not found' });
        }
        res.json(priceList);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const createPriceList = async (req, res) => {
    try {
        const { ma_vtu, ten_vtu, dvt, don_gia, kl_ton } = req.body;
        const priceList = await PriceList.create({
            ma_vtu,
            ten_vtu,
            dvt,
            don_gia,
            kl_ton
        });
        res.status(201).json(priceList);
    } catch (err) {
        res.status(400).json({ message: 'Bad Request' });
    }
};

export const updatePriceList = async (req, res) => {
    try {
        const { ma_vtu, ten_vtu, dvt, don_gia, kl_ton } = req.body;
        const priceList = await PriceList.findByPk(req.params.id);
        if (!priceList) {
            return res.status(404).json({ message: 'Price List not found' });
        }
        await priceList.update({
            ma_vtu,
            ten_vtu,
            dvt,
            don_gia,
            kl_ton
        });
        res.json(priceList);
    } catch (err) {
        res.status(400).json({ message: 'Bad Request' });
    }
};

export const deletePriceList = async (req, res) => {
    try {
        const priceList = await PriceList.findByPk(req.params.id);
        if (!priceList) {
            return res.status(404).json({ message: 'Price List not found' });
        }
        await priceList.destroy();
        res.json({ message: 'Price List deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};