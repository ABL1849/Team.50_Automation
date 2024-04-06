import React, { useState } from 'react'
import HrLogin from './HrLogin';
import EmpLogin from './EmpLogin';



const Login = () => {

  const [emp, setEmp] = useState(true);

  return (
    <div className='w-1/3 rounded-xl flex flex-col justify-center bg-black items-center text-[white] h-5/6 shadow-lg shadow-black '>
      <div className='text-[2.4rem] flex flex-col justify-center items-center mb-6'>
        <p className='font-bold text-[#0ea5e9]'>Login</p>
        <div className='flex gap-x-4 justify-center mb-8 mt-6'>
          <button onClick={() => {setEmp(true)}} className={`border-2 border-white px-10 py-3 rounded-xl ${ emp ? 'bg-[white]' : 'bg-[#0e1628]' }  text-lg hover:bg-white hover:text-[#0ea5e9] text-[#0ea5e9] `}>EMP</button>
          <button onClick={() => {setEmp(false)}} className={`border-2 border-white px-10 py-3 rounded-xl ${ !emp ? 'bg-[white]' : 'bg-[#0e1628]' } bg-[#0e1628]  text-lg hover:bg-white hover:text-[#0ea5e9] text-[#0ea5e9] `}>HR</button>
        </div> 
      </div>
      {
        !emp ? <HrLogin className='w-full'></HrLogin> : <EmpLogin className='w-full'></EmpLogin>
      }
    </div>
  )
}

export default Login
