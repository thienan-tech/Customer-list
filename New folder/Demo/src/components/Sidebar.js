import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-light border-right p-3" style={{ width: '20%' }}>
            <h4>Menu</h4>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#">Tìm kiếm</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Thêm mới</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sửa</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Xóa</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;