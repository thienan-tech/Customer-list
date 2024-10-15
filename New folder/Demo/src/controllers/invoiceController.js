import Invoice from '../models/Invoice.js';
import InvoiceDetail from '../models/InvoiceDetail.js';
import PriceList from '../models/PriceList.js';

export const getAllInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.findAll({
            include: [
                {
                    model: InvoiceDetail,
                    include: [
                        {
                            model: PriceList,
                            attributes: ['ma_vtu', 'ten_vtu', 'dvt', 'don_gia']
                        }
                    ]
                }
            ]
        });
        res.status(200).json(invoices);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.findByPk(req.params.id, {
            include: [
                {
                    model: InvoiceDetail,
                    include: [
                        {
                            model: PriceList,
                            attributes: ['ma_vtu', 'ten_vtu', 'dvt', 'don_gia']
                        }
                    ]
                }
            ]
        });
        if (!invoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
        res.status(200).json(invoice);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createInvoice = async (req, res) => {
    try {
        const { ma_kh, tong_dh, cong_no, ma_hd, invoiceDetails } = req.body;
        const invoice = await Invoice.create({
            ma_kh,
            tong_dh,
            cong_no,
            ma_hd
        });

        for (const detail of invoiceDetails) {
            await InvoiceDetail.create({
                ma_dh: invoice.id,
                ma_vtu: detail.ma_vtu,
                ten_vtu: detail.ten_vtu,
                dvt: detail.dvt,
                so_luong: detail.so_luong,
                don_gia: detail.don_gia,
                thanh_tien: detail.thanh_tien,
                ghi_chu: detail.ghi_chu
            });
        }

        res.status(201).json(invoice);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.findByPk(req.params.id);
        if (!invoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }

        await invoice.update(req.body);
        res.status(200).json(invoice);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.findByPk(req.params.id);
        if (!invoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }

        await invoice.destroy();
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};