import React, { useEffect, useState } from 'react'
import axiosinstance from '../Axios'
import { Link } from 'react-router-dom'
import Loader from './Loader'

function Blogcard({home}) {
    const [blogs,setblogs] = useState([])
    const [loader,setloader] = useState(false)
    useEffect(()=>{
        setloader(true)
        axiosinstance.get('/blog/getallblog').then(({data})=>{
            if(home){
                const latesblogs = data.blog.slice(0,4)
                setblogs(latesblogs)
                setloader(false)

            }else{
            setblogs(data.blog)
            setloader(false)
            }
        })

    },[])
  return (
    <div className='flex-col' id='blog'>
          <div className='flex p-5 justify-center'>
        <h1 className='text-2xl font-brexo  lg:text-4xl whitespace-nowrap'>{home ? 'From the Blog' : 'Blogs'}</h1>
        </div>
        
          <aside aria-label="Related articles" class="py-8 lg:py-24 bg-black text-white">
  <div class={ home ? "px-10 mx-auto max-w-screen-xl" : "flex align-middle justify-center mx-auto max-w-screen-xl p-4 "}>
     
      {
        loader ? <div className='flex justify-center align-middle'><Loader/></div> : <div class={ home ? "grid gap-12 sm:grid-cols-2 lg:grid-cols-4" : "grid gap-12 sm:grid-cols-2 lg:grid-cols-3"}>
        {
           blogs.map((e)=>{
               return (
                   <article class="max-w-xs">
                  
                       <img src={e.img} class="mb-5 rounded-lg w-full h-1/2" alt="Image 1" ></img>
                 
                   <h2 class="mb-2 text-xl font-bold leading-tighttext-white">
                       <a href="#">{e.title}</a>
                   </h2>
                  <div className='flex align-bottom bottom-0 h-4'>
                  <a href={`/blog/${e._id}`} class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline bottom-0">
                       Read more
                   </a>
                  </div>
                 
               </article>
           
               )
           })
           
        }
       
      
     </div>
      }
    {
        home &&  <div className='flex align-middle justify-center'>
        <Link to='/allblogs' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-black  hover:bg-gray-900 border border-white text-white font-montserrat  m-2 ">
           Read more Blog from us
           <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
           </svg>
       </Link>
        </div>
    }
  </div>
</aside>
      
      
    </div>
  )
}

export default Blogcard
