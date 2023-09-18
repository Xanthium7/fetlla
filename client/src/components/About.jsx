import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  const isMobile = window.innerWidth <= 767;

  const aboutStyles = isMobile 
  ? {
      height: '90vh',
    }
  : {
      /* Styles for Desktop Window. Already Used Tailwind */
    };

  return (
    <div className="bg-aboutbg flex flex-col justify-around text-black lg:flex-row " id='about'>
     <div className='about  flex justify-center  flex-col p-14 md-:p-20 lg:w-1/2 ' style={aboutStyles}>
      <h1 className = 'font-brexo text-4xl font-bold mb-5'>About</h1>
      <p className='font-montserrat'>Fetlla a is a cybersecurity and development team that offers cybersecurity and development services to businesses and individuals. They specialize in securing digital assets and delivering high-quality development solutions to help their clients succeed in their online endeavors. </p>
      <button type="button" class=" mt-5 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 font-montserrat" style={{width:"53%"}}><Link to={'/allservices'}>Services</Link></button>

     </div>
     <div className='image w-1/2  shadow-lg bg-black justify-center hidden lg:flex p-20 ' style={{boxShadow: '-10px 0px 10px -5px rgba(0, 0, 0, 0.75)'}}>
      <img  className = '' src='./about-img.jpg'></img>
     </div>
    
  </div>
  )
}

export default About
