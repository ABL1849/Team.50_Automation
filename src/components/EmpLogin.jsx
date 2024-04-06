import React from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from 'react';


const EmpLogin = () => {

  
  const [privacy, setPrivacy] = useState(false);

  const privacyHandler = () => {
    setPrivacy(!privacy);
  }

  const [empFormData, setEmpFormData] = useState({
    role: 'employee',
    email : '',
    password:'',
  }); 

  const changeHandler = (event) => {
    const {name, value} = event.target;
    setEmpFormData((prevData) => {
      return {
        ...prevData,
        [name]  : value,
      }
    });
  };

  const submitHandler = (event) => {
      event.preventDefault();
      console.log("Submitted Data:- ")
      console.log(empFormData);
  }

  return (
    <div className='w-full flex flex-col justify-center items-center gap-y-7 bg-black'>
      <div className='w-2/3'>
        <form onSubmit={submitHandler} className='flex w-full flex-col justify-center items-center gap-y-2 text-[#0ea5e9]'>
          <label htmlFor="email" className='w-full text-xl'>Enter Email</label>
          <input name = 'email' value={empFormData.email} onChange={changeHandler} type="email" id='email' className='text-[#8e898e] w-full py-2 rounded-lg outline-none  focus:border-none px-4 text-lg bg-[#0e1628]'></input>
          <label htmlFor="pwd" className='w-full text-xl mt-2'>Enter Password</label>
          <div className='w-full bg-[#0e1628] rounded-lg items-center text-xl pl-2 flex'>
            <input name = 'password' value={empFormData.password} onChange={changeHandler} type={ privacy ? 'text' : 'password' } id='pwd' className='text-[#8e898e] w-5/6 outline-none py-2 rounded-lg focus:border-none px-2 bg-[#0e1628]'></input>
            {
              privacy ? <FaEye onClick={privacyHandler} className='text-[#8e898e] w-1/6'></FaEye> : <FaEyeSlash onClick={privacyHandler} className='text-[#8e898e] w-1/6'></FaEyeSlash>
            }
          </div>
          <div className=' w-full mt-5 flex justify-center bg-[white] text-black rounded-lg'>
            <button type='submit' className='w-full text-2xl rounded-lg hover:bg-[#0e1628] border-2 border-white text-[#0ea5e9] hover:text-[#0ea5e9] hover:border-2 hover:border-white py-2'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmpLogin
