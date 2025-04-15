import React from 'react'
import bgImage from '../../assets/bg.png';
import './Subscribe.css'





const Subscribe = () => {
  return (
    <section>
      <div className="example">  
  <img className="background-image" src={bgImage} alt="Background" />  
  <div className="overlay-text">    
    <h1 ><b>450k+ Students are Learning from us</b></h1>  <br></br> 
    <div><p> Edukate aims to transform not just through words, but provide results with numbers !</p>  </div>
    
    <div ><a href=''>Subscribe Now</a></div>
  </div>
</div>

     </section>
  )
}

export default Subscribe