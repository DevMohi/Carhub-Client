import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import auth from '../Login/Firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl font-bold text-purple-500 text-center'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    <li><Link to='/dashboard/addReview'>Add Review</Link></li>

                    {admin && <>
                        <li><Link to='/dashboard/addadmin'>Add Admin</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/manageProduct'>Manage Product</Link></li>
                    </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;