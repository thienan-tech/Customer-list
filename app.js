import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import {
    getCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
} from './models/customerModel.js';

const app = express();
const port = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// GET /customers
app.get('/customers', (req, res) => {
    getCustomers((error, customers) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.json(customers);
        }
    });
});

// GET /customers/:id
app.get('/customers/:id', (req, res) => {
    getCustomerById(req.params.id, (error, customer) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else if (!customer) {
            res.status(404).json({ error: 'Customer not found' });
        } else {
            res.json(customer);
        }
    });
});

// POST /customers
app.post('/customers', (req, res) => {
    createCustomer(req.body, (error, newCustomer) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(201).json(newCustomer);
        }
    });
});

// PUT /customers/:id
app.put('/customers/:id', (req, res) => {
    updateCustomer(req.params.id, req.body, (error, updatedCustomer) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.json(updatedCustomer);
        }
    });
});

// DELETE /customers/:id
app.delete('/customers/:id', (req, res) => {
    deleteCustomer(req.params.id, (error, deletedCustomer) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.json(deletedCustomer);
        }
    });
});

// Serve the customer management page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'customers', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});