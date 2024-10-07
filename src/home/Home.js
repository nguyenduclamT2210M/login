import React from 'react';

const Home = () => {
    const fullName = localStorage.getItem('full_name'); // Lấy full_name từ localStorage

    return (
        <div className="home-container">
            <h1>Chào mừng, {fullName}!</h1>
            <p>Đây là trang chính của bạn.</p>
            {/* Thêm các nội dung khác cho trang Home ở đây */}
        </div>
    );
};

export default Home;
