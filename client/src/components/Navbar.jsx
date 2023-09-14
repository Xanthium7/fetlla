import { useState } from "react";
import { Link, useParams } from "react-router-dom";


function Navbar() {
  const [shownav, setshownav] = useState(false);
  
  const { id } = useParams();


  return (
    <div className="top-0 sticky z-50">
      <nav className="bg-black text-white border-gray-200 font-montserrat dark:bg-gray-900  mb-5">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img
              src={ id ?  "../Fetlla.jpg" : "./Fetlla.jpg"} 
              className="h-8 mr-3"
              alt=" Logo"
            />
            <span className="self-center text-2xl font-brexo whitespace-nowrap dark:text-white">
              FETLLA
            </span>
          </a>

          <button
            onClick={() => setshownav(!shownav)}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
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
            </svg>
          </button>

          <div
            className={
              shownav
                ? " w-full md:block md:w-auto"
                : "hidden w-full md:block md:w-auto"
            }
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg   md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
             

              <li >
                <p className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <Link to='/'>Home</Link>
                </p>
              </li>
              <li>
              
                  
                   
                    <p className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                     <a href='/#about'>About</a> 
                    </p>
                
              
              </li>
              <li>
                <p className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                 <a href='/allblogs'>Blog</a>
                </p>
              </li>
              <li>
                <p className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
               <a href="/allservices">Services</a>
                </p>
              </li>
             
              <li>
                <p className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <a href="/#contact">Contact</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
