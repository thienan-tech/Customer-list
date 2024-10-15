import express from 'express';
import {
    getAllPriceLists,
    getPriceListById,
    createPriceList,
    updatePriceList,
    deletePriceList
} from '../controllers/priceListController.js';

const router = express.Router();

router.get('/', getAllPriceLists);
router.get('/:id', getPriceListById);
router.post('/', createPriceList);
router.put('/:id', updatePriceList);
router.delete('/:id', deletePriceList);

export default router;