// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Banner2 from './components/Banner/Banner2';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import ExplorePage from './components/Services/ExplorePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore/:course" element={<ExplorePage />} />
        <Route path="/" element={
          <>
            <Navbar />
            <section id="home"><Hero /></section>
            <section id="services"><Services /></section>
            <Banner />
            <Subscribe />
            <Banner2 />
            <section id="contact"><Footer /></section>
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;
