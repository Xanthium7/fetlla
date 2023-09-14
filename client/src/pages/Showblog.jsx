import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axiosinstance from '../Axios'
import Footer from '../components/Footer'
import Individualblogs from '../components/Individualblogs'

function Showblog() {
    const [da,setda] = useState({})
    const getallblog = async ()=>{
        const {data} = await axiosinstance.get('/blog/getallblog')
        console.log(data)
        setda(data.blog[3])
    }
    useEffect(()=>{
        getallblog()

    },[])
  return (
    <div className='min-h-screen flex flex-col bg-black text-white '>
        <Navbar/>
        <Individualblogs/>
        <Footer/>
        
  




      
    </div>
  )
}

export default Showblog
