import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import axiosinstance from '../Axios';
import Blogcard from '../components/Blogcard';

function Displayservices() {
    const [services, setservices] = useState([]);
    const [loading,setloading] = useState(false)
    useEffect(() => {
        setloading(true)
      axiosinstance.get("/services/getallservices").then(({ data }) => {
        setservices(data.allservices);
        setloading(false)
      });
    }, []);
  return (
    <div className='"min-h-screen flex flex-col bg-black text-white '>
        <Navbar/>
        <div className='flex-col' id='blog'>
          <div className='flex p-10 justify-center'>
        <h1 className='text-2xl font-brexo  lg:text-4xl'>Services</h1>
        </div>
        
          <aside aria-label="Related articles" class="py-8 lg:py-24 bg-black text-white">
  <div class="px-4 mx-auto max-w-screen-xl">
     
      {
        loading ? <div className='flex justify-center align-middle'><Loader/></div> : <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {
           services.map((e)=>{
               return (
                   <article class="max-w-xs">
                  
                       <img src={e.images} class="mb-5 rounded-lg w-full h-1/2" alt="Image 1" ></img>
                 
                   <h2 class="mb-2 text-xl font-bold leading-tighttext-white">
                       <a href="#">{e.title}</a>
                   </h2>
                   <p class="mb-4 font-light text-white"></p>
                   {e.message}
               </article>
           
               )
           })
           
        }
       
      
     </div>
      }
    
  </div>
</aside>
      
      
    </div>
      
        <Footer/>

      
    </div>
  )
}

export default Displayservices
