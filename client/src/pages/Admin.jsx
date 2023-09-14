import React from 'react'
import Adminnav from '../components/Adminnav'
import Adminlayout from '../components/Adminlayout'

function Admin() {
  return (
    <div className=' min-h-screen bg-white '>
    <Adminnav/>
    <Adminlayout>
       <div className='flex justify-center align-middle items-center h-full'>
        <h1>Hi,Admin</h1>
       </div>
    </Adminlayout>
  
</div>
  )
}

export default Admin

