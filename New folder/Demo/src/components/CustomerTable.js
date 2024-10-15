import React from 'react';

const CustomerTable = ({ customers }) => {
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Mã KH</th>
                <th>Tên KH</th>
                <th>SDT</th>
                <th>Địa chỉ</th>
                <th>Email</th>
                <th>Ngày sinh</th>
                <th>Hành động</th>
            </tr>
            </thead>
            <tbody>
            {customers.map((customer) => (
                <tr key={customer.id}>
                    <td>{customer.ma_kh}</td>
                    <td>{customer.ten_kh}</td>
                    <td>{customer.sdt}</td>
                    <td>{customer.dia_chi}</td>
                    <td>{customer.email}</td>
                    <td>{customer.ngaysinh}</td>
                    <td>
                        <button className="btn btn-primary btn-sm mr-2">Sửa</button>
                        <button className="btn btn-danger btn-sm">Xóa</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default CustomerTable;