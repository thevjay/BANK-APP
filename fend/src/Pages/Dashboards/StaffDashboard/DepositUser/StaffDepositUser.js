import React, { useState } from 'react';
import { FaEnvelope, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { depositUser } from '../../../../Hooks/Api/staffApi';
import StaffSidebar from '../StaffSideBar';

const StaffDepositUser = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');

    const submitHandle = async (e) => {
        e.preventDefault();
        await depositUser({ accountNumber, amount });
        toast.success("Deposit Successful");
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <StaffSidebar />
            <div className="flex-1 p-6">
                <ToastContainer />
                <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center">Deposit User</h2>
                    <form onSubmit={submitHandle}>
                        <div className="mb-4">
                            <div className="flex items-center border border-gray-300 rounded-md p-2">
                                <FaEnvelope className="text-gray-500 mr-2" />
                                <input
                                    placeholder='User Account Number'
                                    value={accountNumber}
                                    onChange={e => setAccountNumber(e.target.value)}
                                    name='accountNumber'
                                    type='number'
                                    className='w-full focus:outline-none'
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center border border-gray-300 rounded-md p-2">
                                <FaLock className="text-gray-500 mr-2" />
                                <input
                                    placeholder='Amount'
                                    value={amount}
                                    onChange={e => setAmount(e.target.value)}
                                    name='amount'
                                    type='number'
                                    className='w-full focus:outline-none'
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type='submit'
                            className='w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition duration-300'
                        >
                            Deposit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StaffDepositUser;
