import React from 'react'
import Navbar from '../components/Navbar'
import Blogcard from '../components/Blogcard'
import Footer from '../components/Footer'

function Allblogs() {
  return (
    <div className='min-h-screen flex flex-col bg-black text-white justify-between '>
        <Navbar/>
        <Blogcard home={false} />
        <Footer/>

      
    </div>
  )
}

export default Allblogs
