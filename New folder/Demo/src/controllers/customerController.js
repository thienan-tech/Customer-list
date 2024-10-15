import Customer from '../models/Customer.js';

export const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.getAllCustomers();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.getCustomerById(req.params.id);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json(customer);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const createCustomer = async (req, res) => {
    try {
        const { ma_kh, ten_kh, sdt, dia_chi, email, ngaysinh } = req.body;
        const customer = new Customer(ma_kh, ten_kh, sdt, dia_chi, email, ngaysinh);
        await customer.save();
        res.status(201).json(customer);
    } catch (err) {
        res.status(400).json({ message: 'Bad Request' });
    }
};

export const updateCustomer = async (req, res) => {
    try {
        const { ma_kh, ten_kh, sdt, dia_chi, email, ngaysinh } = req.body;
        const customer = new Customer(ma_kh, ten_kh, sdt, dia_chi, email, ngaysinh);
        await customer.update();
        res.json(customer);
    } catch (err) {
        res.status(400).json({ message: 'Bad Request' });
    }
};

export const deleteCustomer = async (req, res) => {
    try {
        await Customer.deleteCustomer(req.params.id);
        res.json({ message: 'Customer deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};