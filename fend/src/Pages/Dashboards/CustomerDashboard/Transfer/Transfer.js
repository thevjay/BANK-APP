import React, { useState } from 'react';
import { FaEnvelope } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { transferMoney } from '../../../../Hooks/Api/userApi';
import Sliderbar from '../Slidebar/Sliderbar';

const Transfer = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');

    const submitHandle = async (e) => {
        e.preventDefault();
        await transferMoney({ accountNumber, amount });
        alert('Transfer Successfully');
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sliderbar />
            <div className="flex-1 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-xl font-semibold text-center mb-4">Transfer Money</h2>
                    <form onSubmit={submitHandle} className="space-y-4">
                        <div className="flex items-center border border-gray-300 rounded-md p-2">
                            <FaEnvelope className="text-gray-500 mr-2" />
                            <input 
                                placeholder='User Account Number'
                                value={accountNumber}
                                onChange={e => setAccountNumber(e.target.value)}
                                name='accountNumber'
                                type='number'
                                className="flex-1 outline-none"
                            />
                        </div>

                        <div className="flex items-center border border-gray-300 rounded-md p-2">
                            <MdOutlineAttachMoney className="text-gray-500 mr-2" />
                            <input 
                                placeholder='Amount'
                                value={amount}
                                onChange={e => setAmount(e.target.value)}
                                name='amount'
                                type='number'
                                className="flex-1 outline-none"
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full mb-4 bg-green-600 text-white font-bold py-2 rounded-md hover:bg-green-700 transition duration-300"
                        >
                            Transfer
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Transfer;
