import React from 'react';
import Banner from '../../components/Home/Banner/Banner';
import Footer from '../../components/Home/Footer/Footer';
import Header from '../../components/Home/Header/Header';
import { useEffect } from 'react';
import Infos from '../../components/Home/Infos/Infos';
import Services from '../../components/Home/Services/Services';
import FeaturedService from '../../components/Home/FeaturedService/FeaturedService';
import AppointmentBanner from '../../components/Home/AppointmentBanner/AppointmentBanner';
import Testimonials from '../../components/Home/Testimonials/Testimonials';
import Blogs from '../../components/Home/Blogs/Blogs';
import Doctors from '../../components/Home/Doctors/Doctors';
import Contact from '../../components/Home/Contact/Contact';
const Home = () => {
    useEffect(() => {window.scrollTo(0,0)}, [])

    return (
        <>
            <Header/>
            <Banner/>
            <Infos/>
            <Services/>
            <FeaturedService/>
            <AppointmentBanner/>
            <Testimonials/>
            <Blogs/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;