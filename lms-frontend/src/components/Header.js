import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <h1>Admin Dashboard</h1>
            <div className="user-info">
                <p>User Name</p>
                <img src="https://via.placeholder.com/40" alt="User" />
            </div>
        </header>
    );
};

export default Header;