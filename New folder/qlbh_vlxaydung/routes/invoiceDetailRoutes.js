const express = require('express');
const invoiceDetailController = require('../controllers/invoiceDetailController');

const router = express.Router();

router.post('/api/invoice-details', invoiceDetailController.createInvoiceDetail);
router.get('/api/invoice-details', invoiceDetailController.getInvoiceDetails);
router.get('/api/invoice-details/:id', invoiceDetailController.getInvoiceDetailById);
router.put('/api/invoice-details/:id', invoiceDetailController.updateInvoiceDetail);
router.delete('/api/invoice-details/:id', invoiceDetailController.deleteInvoiceDetail);

module.exports = router;