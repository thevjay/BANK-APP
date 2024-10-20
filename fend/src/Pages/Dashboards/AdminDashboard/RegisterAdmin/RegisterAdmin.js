import React, { useState } from 'react';
import loginBg from '../../../../assets/images/bg_login.jpeg';
import { FaUser, FaUserCircle, FaEnvelope,} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { IoLockOpenOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { signUpAdmin } from '../../../../Hooks/Api/adminApi';

const RegisterAdmin = () => {
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();

    const submitHandle = async (e) => {
        e.preventDefault(); // Prevent default form submission
        await signUpAdmin({ role, username, email, password, address });
        navigate('/admin/login');
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            <div className="flex-1 flex items-center justify-center p-6">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Register New Admin</h2>
                    <form onSubmit={submitHandle}>
                        <div className="mb-4">
                            <div className="flex items-center border-b border-gray-300 pb-2">
                                <FaUser className="mr-2 text-gray-500" />
                                <input
                                    placeholder='Your Role'
                                    value={role}
                                    onChange={e => setRole(e.target.value)}
                                    name='role'
                                    type='text'
                                    className='w-full focus:outline-none'
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center border-b border-gray-300 pb-2">
                                <FaUserCircle className="mr-2 text-gray-500" />
                                <input
                                    placeholder='Your Name'
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    name='username'
                                    type='text'
                                    className='w-full focus:outline-none'
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center border-b border-gray-300 pb-2">
                                <FaEnvelope className="mr-2 text-gray-500" />
                                <input
                                    placeholder='Your Email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    name='email'
                                    type='email'
                                    className='w-full focus:outline-none'
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center border-b border-gray-300 pb-2">
                                <FaLocationDot className="mr-2 text-gray-500" />
                                <input
                                    placeholder='Your Address'
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                    name='address'
                                    type='text'
                                    className='w-full focus:outline-none'
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center border-b border-gray-300 pb-2">
                                <IoLockOpenOutline className="mr-2 text-gray-500" />
                                <input
                                    placeholder='Your Password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    name='password'
                                    type='password'
                                    className='w-full focus:outline-none'
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className='mb-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200'>
                            Register
                        </button>

                        <p className="text-center">
                            Already have an account?{' '}
                            <Link to={'/admin/login'} className="text-green-600 font-bold">
                                Login to your account
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

            <div className="hidden md:flex md:flex-1">
                <img src={loginBg} alt='Login Background' className="object-cover h-full" />
            </div>
        </div>
    );
};

export default RegisterAdmin;
