import express from 'express';
import { getHomePage, getPriceListPage, getInvoicesPage, getInvoiceDetailsPage } from '../controllers/homeController.js';

const router = express.Router();

router.get('/', getHomePage);
router.get('/price-list', getPriceListPage);
router.get('/invoices', getInvoicesPage);
router.get('/invoice/:id', getInvoiceDetailsPage);

export default router;