// invoiceRouter.js
import express from 'express';
import {
    getInvoicesController,
    getInvoiceByIdController,
    createInvoiceController,
    updateInvoiceController,
    deleteInvoiceController,
    getInvoiceDetailsController,
    createInvoiceDetailController,
    updateInvoiceDetailController,
    deleteInvoiceDetailController
} from '../controllers/invoiceController.js';

const router = express.Router();

// Invoice routes
router.get('/', getInvoicesController);
router.get('/:id', getInvoiceByIdController);
router.post('/', createInvoiceController);
router.put('/:id', updateInvoiceController);
router.delete('/:id', deleteInvoiceController);

// Invoice details routes
router.get('/:invoiceId/details', getInvoiceDetailsController);
router.post('/:invoiceId/details', createInvoiceDetailController);
router.put('/:invoiceId/details/:id', updateInvoiceDetailController);
router.delete('/:invoiceId/details/:id', deleteInvoiceDetailController);

export default router;