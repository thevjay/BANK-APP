import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from './Pages/Home/Home'
import CustomerLogin from './Pages/Dashboards/CustomerDashboard/CustomerLogin/CustomerLogin'
import CustomerDashboard from './Pages/Dashboards/CustomerDashboard/CustomerDashboard'
import Transfer from './Pages/Dashboards/CustomerDashboard/Transfer/Transfer'
import RegisterAdmin from './Pages/Dashboards/AdminDashboard/RegisterAdmin/RegisterAdmin'
import LoginAdmin from './Pages/Dashboards/AdminDashboard/LoginAdmin/LoginAdmin'
import AdminDashboard from './Pages/Dashboards/AdminDashboard/AdminDashboard'
import CreateUser from './Pages/Dashboards/AdminDashboard/CreateUser/CreateUser'

import DepositUser from './Pages/Dashboards/AdminDashboard/DepositUser/DepositUser'

import StaffLogin from './Pages/Dashboards/StaffDashboard/StaffLogin/StaffLogin'
import StaffDashboard from './Pages/Dashboards/StaffDashboard/StaffDashboard'
import StaffCreateUser from './Pages/Dashboards/StaffDashboard/CreateUser/CreateUser'
import StaffDepositUser from './Pages/Dashboards/StaffDashboard/DepositUser/StaffDepositUser'

const App = () => {

  const [admin,setAdmin]=useState(null)

  useEffect(()=>{
    const storedToken=localStorage.getItem('adminAccessToken')

    if(storedToken){
        setAdmin(storedToken)
    }
  },[])

  return (
    <>
      <Routes>
        <Route  index element={<Home/>}/>

        <Route path='/customer' element={<Outlet/>}>
          <Route index element={<CustomerLogin/>}/>
          <Route path='dashboard' element={<CustomerDashboard />} />
          <Route path='transfer' element={<Transfer/>}/>
        </Route>

        <Route path='/admin' element={<Outlet/>}>
          <Route index element={<RegisterAdmin/>}/>
          <Route path='login' element={<LoginAdmin/>}/>
          <Route path='dashboard' element={admin ? <AdminDashboard/> : <Navigate to={'/admin/login'}/>}>
            <Route index element={<AdminDashboard/>}></Route>
            <Route path='createuser' element={<CreateUser/>}></Route>
            <Route path='deposituser' element={<DepositUser />}></Route>
          </Route>
        </Route>

        <Route path='/staff' element={<Outlet/>}>
            <Route index element={<StaffLogin/>}/>
            <Route path='dashboard' element={<Outlet/>}>
                <Route index element={<StaffDashboard/>}></Route>

                <Route path='createuser' element={<StaffCreateUser />}></Route>
                <Route path='deposituser' element={<StaffDepositUser />}></Route>
            </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
