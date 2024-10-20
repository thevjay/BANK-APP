import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { useAuth } from '../../Context/AuthContext';

const Navbar = () => {
    const {user,logout}=useAuth()
    const handleLogout = () => {
        // Implement your logout logic here
        logout()
    };

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/">
                    <img src={logo} alt="Logo" className="h-8" />
                </Link>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</Link>
                        </li>
                        <li>
                            <Link to="#about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</Link>
                        </li>
                        {
                            !user ?(
                                <>
                                    <li>
                                        <Link to='/customer' className="text-gray-700 hover:text-blue-600 transition duration-300">Customer</Link>
                                    </li>
                                    
                                    <li>
                                        <Link to='/admin' className="text-gray-700 hover:text-blue-600 transition duration-300">Admin</Link>
                                    </li>

                                    <li>
                                        <Link to='/staff' className="text-gray-700 hover:text-blue-600 transition duration-300">Staff</Link>
                                    </li>

                                </>
                            ):(
                                <>
                                    <li>
                                        <Link onClick={handleLogout} className="text-gray-700 hover:text-blue-600 transition duration-300">Logout</Link>
                                    </li>
                                    <li>
                                        <Link to="/customerdashboard" className="text-gray-700 hover:text-blue-600 transition duration-300">Dashboard</Link>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
