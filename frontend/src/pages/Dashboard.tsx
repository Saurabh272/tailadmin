import React from 'react';
import { FaUsers, FaChartBar, FaShoppingCart, FaMoneyBillWave } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Users', value: '1,234', icon: FaUsers, color: 'bg-blue-500' },
    { title: 'Total Sales', value: '$56,789', icon: FaShoppingCart, color: 'bg-green-500' },
    { title: 'Revenue', value: '$123,456', icon: FaMoneyBillWave, color: 'bg-yellow-500' },
    { title: 'Conversion Rate', value: '23%', icon: FaChartBar, color: 'bg-purple-500' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className={`${stat.color} rounded-full p-3 mr-4`}>
                <stat.icon className="text-white text-2xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <div className="bg-blue-100 rounded-full p-2 mr-4">
                <FaUsers className="text-blue-500" />
              </div>
              <div>
                <p className="font-medium">New user registered</p>
                <p className="text-sm text-gray-500">2 minutes ago</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="bg-green-100 rounded-full p-2 mr-4">
                <FaShoppingCart className="text-green-500" />
              </div>
              <div>
                <p className="font-medium">New order received</p>
                <p className="text-sm text-gray-500">15 minutes ago</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="bg-yellow-100 rounded-full p-2 mr-4">
                <FaMoneyBillWave className="text-yellow-500" />
              </div>
              <div>
                <p className="font-medium">Payment processed</p>
                <p className="text-sm text-gray-500">1 hour ago</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Top Products</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span>Product A</span>
              <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-xs">$1,234</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Product B</span>
              <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-xs">$987</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Product C</span>
              <span className="bg-yellow-100 text-yellow-800 py-1 px-3 rounded-full text-xs">$654</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Product D</span>
              <span className="bg-purple-100 text-purple-800 py-1 px-3 rounded-full text-xs">$321</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;