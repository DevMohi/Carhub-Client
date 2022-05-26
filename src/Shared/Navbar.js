import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Login/Firebase.init';
import logout from '../images/icons/logout.png'
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    const handleLogout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        {/* <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/review">Review</Link></li>
        <li><Link to="/contact">Contact</Link></li> */}
        {
            !user && <li><Link to="/login">Login</Link></li>
        }
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
    </>

    return (
        <div class="navbar bg-base-100 ">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
            </div>
            <div class="navbar-center">
                <a class="btn btn-ghost normal-case text-xl font-extrabold">Car<span className='text-secondary '>Hub</span></a>
            </div>
            <div class="navbar-end">
                <div className='flex items-center'>
                    <p className='mr-3 uppercase hidden lg:block md:block'>{user?.displayName}</p>
                </div>
                {user && <span style={{ cursor: 'pointer' }} onClick={handleLogout}><img src={logout} alt="" /></span>}

                <label for="dashboard-sidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
            </div>


        </div>
    );
};

export default Navbar;