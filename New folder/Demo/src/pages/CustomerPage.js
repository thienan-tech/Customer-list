import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import CustomerTable from '../components/CustomerTable';
import CustomerForm from '../components/CustomerForm';

const CustomerPage = () => {
    const [customers, setCustomers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('/api/customers');
                const data = await response.json();
                setCustomers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCustomers();
    }, []);

    const handleCreateCustomer = async (formData) => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/customers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const newCustomer = await response.json();
            setCustomers([...customers, newCustomer]);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="container-fluid p-4" style={{ width: '80%' }}>
                <h1>Quản lý khách hàng</h1>
                {error && <div className="alert alert-danger">{error}</div>}
                <CustomerForm onSubmit={handleCreateCustomer} isLoading={isLoading} />
                {isLoading ? (
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    <CustomerTable customers={customers} />
                )}
            </div>
        </div>
    );
};

export default CustomerPage;