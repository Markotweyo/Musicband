import React from 'react';
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Category from '../components/Category'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Category/>
            <Footer/>
        </div>
    )
}
export default Home;


