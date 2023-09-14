import React from 'react'

function Adminnav() {
  return (
    <div className='sticky top-0 z-0 text-black'>
          <nav className="bg-white border-gray-200  dark:bg-gray-900 top-0 sticky">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img
              src="https://media.licdn.com/dms/image/C560BAQHMLo8MSZ9MSw/company-logo_200_200/0/1672509230242?e=1698883200&v=beta&t=uIWEdqfvf6QjZp7K4lSwSHQHyfOTNNP2nmAR2yJvF8Y"
              className="h-8 mr-3"
              alt=" Logo"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
              FETLLA
            </span>
          </a>
            <div className="drawer-content  md:hidden">
    <label htmlFor="my-drawer" className=" drawer-button"> <svg
            style={{color:"white",backgroundColor:"black"}}
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg></label>
  </div> 

        

        </div>
      </nav>
      
    </div>
  )
}

export default Adminnav
