import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Welcome to Your Dashboard, {user?.name}! 🎉
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1 */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Account Status
              </h3>
              <p className="text-3xl font-bold text-blue-600">Active</p>
            </div>

            {/* Card 2 */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                User Role
              </h3>
              <p className="text-3xl font-bold text-green-600 capitalize">
                {user?.role}
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Member Since
              </h3>
              <p className="text-lg font-bold text-purple-600">
                {new Date(user?.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Your Information</h2>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Name:</span>{' '}
                <span className="text-gray-900">{user?.name}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Email:</span>{' '}
                <span className="text-gray-900">{user?.email}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">User ID:</span>{' '}
                <span className="text-gray-900 font-mono text-sm">{user?.id}</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Update Profile
              </button>
              <button className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700">
                View Activity
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;