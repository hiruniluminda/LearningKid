import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <ul>
                <li><Link to="/create">Create Course</Link></li>
                <li><Link to="/course">View Student Dashboard</Link></li>
                <li><Link to="">Student Management</Link></li>
                <li><Link to="/support">Reports</Link></li>
                <li><Link to="/analytics">Progress</Link></li>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/support">Log Out</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
