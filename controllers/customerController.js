import { getCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer } from '../models/customerModel.js';

export const getCustomersController = async (req, res) => {
    try {
        const customers = await getCustomers();
        res.render('customers/index', { customers });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getCustomerByIdController = async (req, res) => {
    try {
        const customer = await getCustomerById(req.params.id);
        res.render('customers/edit', { customer });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const createCustomerController = async (req, res) => {
    try {
        const newCustomer = await createCustomer(req.body);
        res.redirect('/customers');
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateCustomerController = async (req, res) => {
    try {
        const updatedCustomer = await updateCustomer(req.params.id, req.body);
        res.redirect('/customers');
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteCustomerController = async (req, res) => {
    try {
        const deletedCustomer = await deleteCustomer(req.params.id);
        res.redirect('/customers');
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};