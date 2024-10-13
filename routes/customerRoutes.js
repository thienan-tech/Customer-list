import express from 'express';
import { getCustomersController, getCustomerByIdController, createCustomerController, updateCustomerController, deleteCustomerController } from '../controllers/customerController.js';

const router = express.Router();

router.get('/', getCustomersController);
router.get('/create', (req, res) => res.render('customers/create'));
router.post('/create', createCustomerController);
router.get('/:id/edit', getCustomerByIdController);
router.post('/:id/edit', updateCustomerController);
router.post('/:id/delete', deleteCustomerController);

export {router};