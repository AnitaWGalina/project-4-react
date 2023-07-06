import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';


const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />
        <Navbar/>
    </main>
  )
}

export default Home
