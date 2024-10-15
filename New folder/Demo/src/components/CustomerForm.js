import React, { useState } from 'react';

const CustomerForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        ma_kh: '',
        ten_kh: '',
        sdt: '',
        dia_chi: '',
        email: '',
        ngaysinh: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            ma_kh: '',
            ten_kh: '',
            sdt: '',
            dia_chi: '',
            email: '',
            ngaysinh: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="ma_kh">Mã KH</label>
                <input
                    type="text"
                    className="form-control"
                    id="ma_kh"
                    name="ma_kh"
                    value={formData.ma_kh}
                    onChange={handleInputChange}
                />
            </div>
            {/* Add more form fields for other customer details */}
            <button type="submit" className="btn btn-primary">
                Lưu
            </button>
        </form>
    );
};

export default CustomerForm;