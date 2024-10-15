import express from 'express';
import * as invoiceController from '../controllers/invoiceController.js';

const router = express.Router();

router.post('/api/invoice', invoiceController.createInvoice);
router.get('/api/invoice', invoiceController.getInvoices);
router.put('/api/invoice/:id', invoiceController.updateInvoice);
router.delete('/api/invoice/:id', invoiceController.deleteInvoice);

export default router;