// customerController.js
import { getCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer } from '../models/customerModel.js';

export const getCustomersController = async (req, res) => {
    try {
        const customers = await getCustomers();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCustomerByIdController = async (req, res) => {
    try {
        const customer = await getCustomerById(req.params.id);
        if (!customer) {
            res.status(404).json({ error: 'Customer not found' });
        } else {
            res.json(customer);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createCustomerController = async (req, res) => {
    try {
        const newCustomer = await createCustomer(req.body);
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateCustomerController = async (req, res) => {
    try {
        const updatedCustomer = await updateCustomer(req.params.id, req.body);
        res.json(updatedCustomer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteCustomerController = async (req, res) => {
    try {
        const deletedCustomer = await deleteCustomer(req.params.id);
        res.json(deletedCustomer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};