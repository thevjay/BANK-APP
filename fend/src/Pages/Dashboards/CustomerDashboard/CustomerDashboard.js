import React from 'react';
import { FaGlobe, FaGithub, FaFacebook } from "react-icons/fa";
import { LiaTwitter, LiaInstagram } from "react-icons/lia";
import Sliderbar from './Slidebar/Sliderbar';

const CustomerDashboard = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const {
        accountNumber,
        username,
        accountBalance,
        address,
        email,
        NIN_Number,
    } = currentUser;

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <section className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row">
                    {/* Sidebar */}
                    <Sliderbar/>
                    <div className="md:w-1/4 p-4">
                        <nav className="flex flex-col space-y-4">
                            <span className="font-bold text-xl">User Profile</span>
                        </nav>
                    </div>

                    {/* User Profile */}
                    <div className="md:w-3/4 p-4">
                        <div className="flex flex-col items-center">
                            <img
                                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
                                alt='avatar'
                                className='rounded-full w-36 mb-4'
                            />
                            <p className="text-lg font-semibold">Full Stack Developer</p>
                            <p className="text-gray-600">{address}</p>

                            <div className="mt-4">
                                <button className="bg-green-700 text-white px-4 py-2 rounded mr-2 hover:bg-green-800 transition duration-300">Follow</button>
                                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-300">Message</button>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="flex  items-center justify-center ">
                                    <FaGlobe className="text-gray-600 text-lg mr-2" />
                                
                                    <FaGithub className="text-gray-600 text-lg mr-2" />
                                    
                                    <LiaTwitter className="text-gray-600  text-lgmr-2" />
                                    
                                    <LiaInstagram className="text-gray-600 text-lg mr-2" />
                                    
                                    <FaFacebook className="text-gray-600  text-lg mr-2" />    
                                
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <p>Full Name</p>
                                    <p>{username}</p>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <p>Email</p>
                                    <p>{email}</p>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <p>Account Number</p>
                                    <p>{accountNumber}</p>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <p>Account Balance</p>
                                    <p>{`$${accountBalance}`}</p>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <p>Address</p>
                                    <p>{address}</p>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <p>NIN Number</p>
                                    <p>{NIN_Number}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CustomerDashboard;
