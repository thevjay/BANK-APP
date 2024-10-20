import React, { useState } from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { CiUnlock } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import loginBg from '../../../../assets/images/bg_login.jpeg';
import { signInAdmin } from '../../../../Hooks/Api/adminApi';

const LoginAdmin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandle = async (e) => {
        e.preventDefault();
        await signInAdmin({ email, password });
        
        navigate('/admin/dashboard');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Admin Login</h2>
                <form onSubmit={submitHandle}>
                    <div className="mb-4">
                        <div className="flex items-center border border-gray-300 rounded-md p-2">
                            <IoPersonSharp className="text-gray-500 mr-2" />
                            <input
                                placeholder='Your Email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                name='email'
                                type='email'
                                className="flex-1 outline-none"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="flex items-center border border-gray-300 rounded-md p-2">
                            <CiUnlock className="text-gray-500 mr-2" />
                            <input
                                placeholder='Your Password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                name='password'
                                type='password'
                                className="flex-1 outline-none"
                            />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-500 transition duration-300">
                        Login
                    </button>

                    <p className="text-center mt-4">
                        Already have an Account{' '}
                        <Link to={'/admin'} className="text-green-600 font-bold underline">
                            SignUp to your account
                        </Link>
                    </p>
                </form>
            </div>
            <div className="hidden lg:block lg:w-1/2 ml-2">
                <img src={loginBg} alt='Login Background' className="object-cover w-full h-full rounded-lg shadow-lg" />
            </div>
        </div>
    );
};

export default LoginAdmin;
