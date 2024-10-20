import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineLogin } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import loginBg from '../../../../assets/images/bg_login.jpeg';
import { signInCustomer } from '../../../../Hooks/Api/userApi';

const CustomerLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage,setErrorMessage]=useState('')
    const navigate = useNavigate();

    const submitHandle = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Reset error message

        try{
            await signInCustomer({ email, password });
            navigate('/customer/dashboard');    
        }
        catch(error){
            // Check if the error has a response
        if (error.response && error.response.status === 401) {
            setErrorMessage('Invalid email or password. Please try again.');
        } else {
            setErrorMessage('An error occurred. Please try again.');
        }
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${loginBg})` }}>
                {/* Background Image */}
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center p-6">
                <form 
                    onSubmit={submitHandle} 
                    className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
                >
                    <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
                    <div className="flex items-center border-b mb-4">
                        <HiOutlineLogin className="text-gray-500 mr-3" />
                        <input 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='Your Email'
                            name='email'
                            type='email'
                            className="flex-grow p-2 focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center border-b mb-6">
                        <RiLockPasswordLine className="text-gray-500 mr-3" />
                        <input 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder='Password'
                            name='password'
                            type='password'
                            className="flex-grow p-2 focus:outline-none"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CustomerLogin;
