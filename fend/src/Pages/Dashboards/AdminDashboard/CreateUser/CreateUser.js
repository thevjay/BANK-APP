import React, { useState } from 'react';

import { CiUser } from "react-icons/ci";
import { FaRegUserCircle, FaLock, FaMapMarker} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { createNewUser } from '../../../../Hooks/Api/adminApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateUser = () => {
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [NIN_Number, setNIN_Number] = useState('');
    const [address, setAddress] = useState('');

    const submitHandle = async () => {
        try {
            await createNewUser({ role, username, email, address, NIN_Number });
            toast.success("User Created Successfully");
        } catch (error) {
            console.error("Error creating user:", error);
        }
    }
    

    return (
        <div className="flex min-h-screen bg-gray-100">
            
            
            <div className="flex-1 p-6">
                <ToastContainer />
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">Create New User</h2>
                    <div className="space-y-4">
                        <div className="flex items-center border rounded p-2">
                            <CiUser className="text-gray-500 mr-2" />
                            <input
                                placeholder='Enter Role'
                                value={role}
                                type='text'
                                onChange={e => setRole(e.target.value)}
                                className='w-full focus:outline-none'
                            />
                        </div>

                        <div className="flex items-center border rounded p-2">
                            <FaRegUserCircle className="text-gray-500 mr-2" />
                            <input
                                placeholder='Enter Name'
                                value={username}
                                type='text'
                                onChange={e => setUsername(e.target.value)}
                                className='w-full focus:outline-none'
                            />
                        </div>

                        <div className="flex items-center border rounded p-2">
                            <MdEmail className="text-gray-500 mr-2" />
                            <input
                                placeholder='Enter Email'
                                value={email}
                                type='text'
                                onChange={e => setEmail(e.target.value)}
                                className='w-full focus:outline-none'
                            />
                        </div>

                        <div className="flex items-center border rounded p-2">
                            <FaMapMarker className="text-gray-500 mr-2" />
                            <input
                                placeholder='Enter Address'
                                value={address}
                                type='text'
                                onChange={e => setAddress(e.target.value)}
                                className='w-full focus:outline-none'
                            />
                        </div>

                        <div className="flex items-center border rounded p-2">
                            <FaRegUserCircle className="text-gray-500 mr-2" />
                            <input
                                placeholder='Enter NIN Number'
                                value={NIN_Number}
                                type='text'
                                onChange={e => setNIN_Number(e.target.value)}
                                className='w-full focus:outline-none'
                            />
                        </div>

                        <button
                            className='mb-4 p-10 bg-green-700 text-white rounded py-2 hover:bg-green-800 transition duration-300'
                            onClick={submitHandle}
                        >
                            Register
                        </button>
                    </div>
                </div>
                {/* <div className="mt-6">
                    <img src={loginBg} alt="Login Background" className="w-full rounded-lg shadow-md" />
                </div> */}
            </div>

            
        </div>
    );
}

export default CreateUser;
