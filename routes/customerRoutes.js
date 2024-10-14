import express from 'express';
import {
    getCustomersController,
    getCustomerByIdController,
    createCustomerController,
    updateCustomerController,
    deleteCustomerController
} from '../controllers/customerController.js';

const router = express.Router();

// GET /customers
router.get('/', getCustomersController);

// GET /customers/:id
router.get('/:id', getCustomerByIdController);

// POST /customers
router.post('/', createCustomerController);

// PUT /customers/:id
router.put('/:id', updateCustomerController);

// DELETE /customers/:id
router.delete('/:id', deleteCustomerController);

export {router};