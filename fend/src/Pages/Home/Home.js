import React from 'react';
import mockUp from '../../assets/images/image-mockups.png';
import online from '../../assets/images/icon-online.svg';
import budgeting from '../../assets/images/icon-budgeting.svg';
import boarding from '../../assets/images/icon-onboarding.svg';
import apiIcon from '../../assets/images/icon-api.svg';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
  return (
    <div className="bg-gray-50 p-6 md:p-12">
      <Navbar/>

      <div className="flex flex-col md:flex-row items-center justify-between mb-16 mt-4">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Next generation digital banking</h1>
          <p className="text-gray-700 mb-6">
            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Request Invite
          </button>
        </div>

        <div className="md:w-1/2">
          <img src={mockUp} alt="Mockup" className="w-full" />
        </div>
      </div>

      {/* Why choose EasyBank Section */}

      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold mb-4">Why choose EasyBank</h1>
        <p className="text-gray-700 mb-8">
          We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105 duration-300">
          <img src={online} alt="Online Banking" className="mb-4" />
          <h1 className="font-semibold text-lg mb-2">Online Banking</h1>
          <p className="text-gray-600">
            Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105 duration-300">
          <img src={budgeting} alt="Simple Budgeting" className="mb-4" />
          <h1 className="font-semibold text-lg mb-2">Simple Budgeting</h1>
          <p className="text-gray-600">
            See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105 duration-300">
          <img src={boarding} alt="Fast Onboarding" className="mb-4" />
          <h1 className="font-semibold text-lg mb-2">Fast Onboarding</h1>
          <p className="text-gray-600">
            We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105 duration-300">
          <img src={apiIcon} alt="Open API" className="mb-4" />
          <h1 className="font-semibold text-lg mb-2">Open API</h1>
          <p className="text-gray-600">
            Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
