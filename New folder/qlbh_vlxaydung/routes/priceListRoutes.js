import express from 'express';
import * as priceListController from '../controllers/priceListController.js';

const router = express.Router();

router.post('/api/price-list', priceListController.createPriceList);
router.get('/api/price-list', priceListController.getPriceLists);
router.put('/api/price-list/:id', priceListController.updatePriceList);
router.delete('/api/price-list/:id', priceListController.deletePriceList);

export default router;