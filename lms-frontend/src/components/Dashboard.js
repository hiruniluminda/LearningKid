import React from 'react';
import './styles.css';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Cards from './Cards';
import UserTable from './UserTable';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="main-content">
                <Header />
                <Cards />
                <UserTable />
                <Footer />
            </div>
        </div>
    );
};

export default Dashboard;
