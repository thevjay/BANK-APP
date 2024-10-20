import React, { useState } from 'react';
import loginBg from '../../../../assets/images/bg_login.jpeg';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from "react-icons/fa";
import { signInStaff } from '../../../../Hooks/Api/staffApi';

const StaffLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandle = async (e) => {
        e.preventDefault();
        await signInStaff({ email, password });
        navigate('/staff/dashboard');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6">Staff Login</h2>
                <form onSubmit={submitHandle}>
                    <div className="mb-4">
                        <div className="flex items-center border border-gray-300 rounded-md p-2">
                            <FaEnvelope className="text-gray-500 mr-2" />
                            <input
                                placeholder='Enter Email'
                                name='email'
                                type='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className='w-full focus:outline-none'
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center border border-gray-300 rounded-md p-2">
                            <FaLock className="text-gray-500 mr-2" />
                            <input
                                placeholder='Enter Password'
                                name='password'
                                type='password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className='w-full focus:outline-none'
                                required
                            />
                        </div>
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300'
                    >
                        Login
                    </button>
                </form>
            </div>
            <div className="hidden lg:block w-1/2 h-full relative">
                <img src={loginBg} alt="Login Background" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
        </div>
    );
};

export default StaffLogin;
