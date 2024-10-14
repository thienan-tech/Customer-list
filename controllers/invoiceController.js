// invoiceController.js
import { getInvoices, getInvoiceById, createInvoice, updateInvoice, deleteInvoice } from '../models/invoiceModel.js';
import { getInvoiceDetails, createInvoiceDetail, updateInvoiceDetail, deleteInvoiceDetail } from '../models/invoiceDetailsModel.js';

export const getInvoicesController = async (req, res) => {
    try {
        const invoices = await getInvoices();
        res.json(invoices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getInvoiceByIdController = async (req, res) => {
    try {
        const invoice = await getInvoiceById(req.params.id);
        if (!invoice) {
            res.status(404).json({ error: 'Invoice not found' });
        } else {
            res.json(invoice);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createInvoiceController = async (req, res) => {
    try {
        const newInvoice = await createInvoice(req.body);
        res.status(201).json(newInvoice);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateInvoiceController = async (req, res) => {
    try {
        const updatedInvoice = await updateInvoice(req.params.id, req.body);
        res.json(updatedInvoice);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteInvoiceController = async (req, res) => {
    try {
        const deletedInvoice = await deleteInvoice(req.params.id);
        res.json(deletedInvoice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getInvoiceDetailsController = async (req, res) => {
    try {
        const invoiceDetails = await getInvoiceDetails(req.params.invoiceId);
        res.json(invoiceDetails);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const createInvoiceDetailController = async (req, res) => {
    try {
        const newInvoiceDetail = await createInvoiceDetail(req.params.invoiceId, req.body);
        res.status(201).json(newInvoiceDetail);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateInvoiceDetailController = async (req, res) => {
    try {
        const updatedInvoiceDetail = await updateInvoiceDetail(req.params.invoiceId, req.params.id, req.body);
        res.jsn(updatedInvoiceDetail);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteInvoiceDetailController = async (req, res) => {
    try {
        const deletedInvoiceDetail = await deleteInvoiceDetail(req.params.invoiceId, req.params.id);
        res.json(deletedInvoiceDetail);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};