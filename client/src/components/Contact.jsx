import React, { useState } from 'react'
import Usevalidate from '../customhooks/Validation';
import axiosinstance from '../Axios';
import { toast } from 'react-toastify';
import Loader from './Loader';

function Contact() {
  const [loader,setloader] = useState(false)
  // calling the custom hook for contactForm validation
  let { handelChange, values, errors,removevalue} = Usevalidate();
  const submit = ()=>{
   
   if(Object.keys(values).length === 3 && Object.keys(errors).length === 0){
    setloader(true)
    axiosinstance.post('/auth/sendmail',values).then((data)=>{
      removevalue()
      generatesuccess('message successfully sent')
        setloader(false)
    }).catch((er)=>{
      setloader(false)
      generateerror("sorry,contact us through mail")

    })

   }
   else{

   }
  }
  const generateerror = (err) => {
    toast.error(err, {
      position: "top-center",
    });
  };
  const generatesuccess = (err) => {
    toast.success(err, {
      position: "top-center",
    });
  };
  /* Styles for Mobile Design  */

  const isMobile = window.innerWidth <= 767;

  const contactStyles = isMobile 
  ? {
    padding: '0 10%',
  }
  : {
    // Already Used Tailwind as Desktop
  };

  const contactHeading = isMobile 
  ? {
    fontSize: '1.5rem',
  }
  : {
    // Already Used Tailwind as Desktop
  };

  const contactMessage = isMobile 
  ? {
    width: '267px',
    textAlign: 'center',
    margin: '10px auto',
  }
  : {
    // Already Used Tailwind as Desktop
  };


  return (
    <div id='contact'>
      <section className="bg-black">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 style={contactHeading} className="mb-4 text-4xl tracking-tight font-brexo text-center text-white">Contact Us</h2>
      <p style={contactMessage} className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Need details about our Business plan? Let us know.</p>
    {loader ?  <div className='flex justify-center align-middle'><Loader/></div> : <>
    <form action="#" className="space-y-8" style={contactStyles}>
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
              <input type="email" id="email" name='email' value={values.email} onChange={handelChange} className="shadow-sm50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-black" placeholder="name@fetlla.com" required></input>
              <p className="text-red-500 text-xs italic h-4 mt-1">
                  {errors.email}
                </p>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Subject</label>
              <input type="text" id="subject" name='title' value={values.title} onChange={handelChange} className="block p-3 w-full text-sm text-white50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-black" placeholder="Let us know how we can help you" required></input>
              <p className="text-red-500 text-xs italic h-4 mt-1">
                  {errors.title}
                </p>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-white ">Your message</label>
              <textarea id="message" rows="6" name='message' value={values.message} onChange={handelChange} className="block p-2.5 w-full text-sm text-white50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-black" placeholder="Leave a comment..."></textarea>
              <p className="text-red-500 text-xs italic h-4 mt-1">
                  {errors.message}
                </p>
          </div>
          <button type="button" onClick={submit} className="py-3 px-5 text-sm font-medium text-center text-black bg-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
    </>}
  </div>
</section>
    </div>
  )
}

export default Contact
