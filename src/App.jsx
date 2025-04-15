import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import Banner from './components/Banner/banner.jsx';
import Subscribe from './components/Subscribe/Subscribe.jsx';
import Banner2 from './components/Banner/Banner2.jsx';
import Footer from './components/Footer/Footer.jsx';




const App = () => {
  return (
    <main className=''> 
      
      <Hero/>
      <Services/>
      <Banner/>
      <Subscribe/>  
       <Banner2/>
       <Footer/>
    </main>
  )
}

export default App