import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <ul>
        <li><Link to="/" className="block py-2">Dashboard</Link></li>
        <li><Link to="/users" className="block py-2">Users</Link></li>
        <li><Link to="/register" className="block py-2">Register User</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;