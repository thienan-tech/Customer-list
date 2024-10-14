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
import {
    getInvoices,
    getInvoiceById,
    createInvoice,
    updateInvoice,
    deleteInvoice
} from './models/invoiceModel.js';
import {
    getInvoiceDetails,
    createInvoiceDetail,
    updateInvoiceDetail,
    deleteInvoiceDetail
} from './models/invoiceDetailsModel.js';

const app = express();
const port = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Customer routes
app.get('/customers', (req, res) => {
    getCustomers((error, customers) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.json(customers);
        }
    });
});

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

app.post('/customers', (req, res) => {
    createCustomer(req.body, (error, newCustomer) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(201).json(newCustomer);
        }
    });
});

app.put('/customers/:id', (req, res) => {
    updateCustomer(req.params.id, req.body, (error, updatedCustomer) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.json(updatedCustomer);
        }
    });
});

app.delete('/customers/:id', (req, res) => {
    deleteCustomer(req.params.id, (error, deletedCustomer) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.json(deletedCustomer);
        }
    });
});

// Invoice routes
app.get('/invoices', (req, res) => {
    getInvoices((error, invoices) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.json(invoices);
        }
    });
});

app.get('/invoices/:id', (req, res) => {
    getInvoiceById(req.params.id, (error, invoice) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else if (!invoice) {
            res.status(404).json({ error: 'Invoice not found' });
        } else {
            res.json(invoice);
        }
    });
});

app.post('/invoices', (req, res) => {
    createInvoice(req.body, (error, newInvoice) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(201).json(newInvoice);
        }
    });
});

app.put('/invoices/:id', (req, res) => {
    updateInvoice(req.params.id, req.body, (error, updatedInvoice) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.json(updatedInvoice);
        }
    });
});

app.delete('/invoices/:id', (req, res) => {
    deleteInvoice(req.params.id, (error, deletedInvoice) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.json(deletedInvoice);
        }
    });
});

// Invoice details routes
app.get('/invoices/:invoiceId/details', (req, res) => {
    getInvoiceDetails(req.params.invoiceId, (error, invoiceDetails) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.json(invoiceDetails);
        }
    });
});

app.post('/invoices/:invoiceId/details', (req, res) => {
    createInvoiceDetail(req.params.invoiceId, req.body, (error, newInvoiceDetail) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(201).json(newInvoiceDetail);
        }
    });
});

app.put('/invoices/:invoiceId/details/:id', (req, res) => {
    updateInvoiceDetail(req.params.invoiceId, req.params.id, req.body, (error, updatedInvoiceDetail) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.json(updatedInvoiceDetail);
        }
    });
});

app.delete('/invoices/:invoiceId/details/:id', (req, res) => {
    deleteInvoiceDetail(req.params.invoiceId, req.params.id, (error, deletedInvoiceDetail) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.json(deletedInvoiceDetail);
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