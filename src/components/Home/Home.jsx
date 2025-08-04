import React from 'react';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Subscribe from '../Subscribe/Subscribe';
import Banner2 from '../Banner/Banner2';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <section id="home"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="about"><Banner /></section>
      <section id="team"><Subscribe /></section>
      <section id="contact"><Banner2 /></section>
      <Footer />
    </>
  );
};

export default Home;
