import React from 'react'
import Adminsidenav from './Adminsidenav'

function Adminlayout({children}) {
  return (
    <div>
         <div className="md:flex     mx-auto gap-6 text-black">
      <div className=" sticky top-0 md:w-3/12 text-black hidden md:block">
        <Adminsidenav/>
      </div>
      <div className=" sticky top-0 md:w-3/12 text-black  md:hidden">
      <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />

  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu w-60 min-h-full bg-white text-black">
      {/* Sidebar content here */}
     <Adminsidenav/>
      
    </ul>
  </div>
</div>
      </div>
     
      <div className=" mr-8 mt-4 md:w-9/12 ">{children}</div>
    </div>
      
    </div>
  )
}

export default Adminlayout
