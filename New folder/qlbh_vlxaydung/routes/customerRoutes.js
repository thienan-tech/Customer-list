import express from 'express';
import {
    getCustomers,
    getCustomerDetails,
    createCustomer,
    getEditCustomer,
    updateCustomer,
    deleteCustomer
} from '../controllers/customerController.js';

const router = express.Router();

router.get('/', getCustomers);
router.get('/create', (req, res) => {
    res.render('create-customer');
});
router.post('/', createCustomer);

router.get('/:id', getCustomerDetails);
router.get('/:id/edit', getEditCustomer);
router.post('/:id/update', updateCustomer);
router.post('/:id/delete', deleteCustomer);

export default router;