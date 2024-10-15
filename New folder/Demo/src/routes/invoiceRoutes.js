import express from 'express';
import {
    getAllInvoices,
    getInvoice,
    createInvoice,
    updateInvoice,
    deleteInvoice
} from '../controllers/invoiceController.js';

const router = express.Router();

router.get('/', getAllInvoices);
router.get('/:id', getInvoice);
router.post('/', createInvoice);
router.put('/:id', updateInvoice);
router.delete('/:id', deleteInvoice);

export default router;