import React, { useState } from 'react';
import logoIcon from '../../../../assets/images/logo.svg';
import { FaTachometerAlt, FaChartArea, FaGithub, FaFillDrip } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { useNavigate,Link } from 'react-router-dom';

const Sliderbar = () => {
    const [showShow, setShowShow] = useState(false);
    const toggleShow = () => setShowShow(!showShow);

    const navigate=useNavigate()

    const handleLogout = () => {
        // Add logout logic here
        localStorage.removeItem('adminAccessToken'); 
        navigate('/customer'); 
    };

    return (
        <div className="flex flex-col h-screen bg-gray-800 text-white w-64">
            <div className="flex items-center justify-center p-4">
                <Link to="/">
                    <img src={logoIcon} height='30' alt='' loading='lazy' />
                </Link>
            </div>

            <div className="flex-grow p-4">
                <div className="mb-4 cursor-pointer" onClick={toggleShow}>
                    <div className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
                        <ImStatsBars className="mr-2" />
                        <span>Dashboard</span>
                    </div>
                </div>

                <Link to="/customer/dashboard" className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
                    <FaTachometerAlt className="mr-2" />
                    <span>Profile</span>
                </Link>

                <Link to="/customer/transfer" className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
                    <FaChartArea className="mr-2" />
                    <span>Transfer Money</span>
                </Link>

                <div className="flex items-center p-2 hover:bg-gray-700 rounded-lg cursor-pointer" onClick={handleLogout}>
                    <MdAttachMoney className="mr-2" />
                    <span>Logout</span>
                </div>
            </div>

            <div className="p-4 bg-yellow-500">
                <div className="flex items-center justify-between">
                    <div className="relative">
                        <input
                            placeholder='Search'
                            type='text'
                            className="bg-gray-700 text-white p-2  rounded-md pl- focus:outline-none "
                        />
                        <CiSearch className="absolute right-3 top-3  text-gray-400" />
                    </div>

                    <div className="relative ml-1">
                        <CiBellOn className="text-xl cursor-pointer" />
                        <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full px-1">1</span>
                    </div>

                    <div className="absolute mb-10 bg-yellow-400">
                        <img
                            src='https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg'
                            className='rounded-full h-8 w-8'
                            alt=''
                            loading='lazy'
                        />
                        <div className="absolute right-0 bg-red-500 text-white rounded-md shadow-lg mt-2 hidden">
                            <div className="p-2 hover:bg-gray-600">
                                <a href='#'>My Profile</a>
                            </div>
                            <div className="p-2 hover:bg-gray-600">
                                <a href='#'>Settings</a>
                            </div>
                            <div className="p-2 hover:bg-gray-600 cursor-pointer" onClick={handleLogout}>
                                <a href='#'>Logout</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 ml-2">
                        <FaFillDrip className="text-xl cursor-pointer" />
                        <FaGithub className="text-xl cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sliderbar;
