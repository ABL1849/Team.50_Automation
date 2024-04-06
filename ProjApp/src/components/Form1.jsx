import React from 'react'
import { useState } from 'react';

const Form1 = () => {

  const [form1, setForm1] = useState({
    firstName : '',
    lastName : '',

  }); 

  const changeHandler = (event) => {
    const {name, value} = event.target;
    setForm1((prevData) => {
      return {
        ...prevData,
        [name]  : value,
      }
    });
  };

  const submitHandler = (event) => {
      event.preventDefault();
      console.log("Submitted Data:- ")
      console.log(form1);
  }

  return (
    <div className='w-full px-24'>
        <form onSubmit={submitHandler} className='flex w-full flex-col justify-center   items-center gap-y-2 text-[#0ea5e9]'>
          <label htmlFor="firstName" className='w-full text-xl'>Enter First Name</label>
          <input name = 'firstName' value={form1.firstName} onChange={changeHandler} type="text" id='firstName' className='text-[#8e898e] w-full py-2 rounded-lg outline-none  focus:border-none px-4 text-lg bg-[#0e1628]'></input>
          <label htmlFor="lastName" className='w-full text-xl mt-2'>Enter Last Name</label>
          <input name = 'lastName' value={form1.lastName} onChange={changeHandler} type="text" id='lastName' className='text-[#8e898e] w-full py-2 rounded-lg outline-none  focus:border-none px-4 text-lg bg-[#0e1628]'></input>
          <label htmlFor="gender" className='w-full text-xl mt-2 ' >Gender</label>
          <select onChange={changeHandler} className='border-2 outline-none  border-[#0e1628] bg-[#0e1628] px-3 mb-4 rounded-md  py-3 text-[#8e898e] w-full' name="gender" id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="date" className='w-full text-xl '> Date </label>
          <input type="date" className=' bg-[#0e1628] rounded-md w-fulltext-[#8e898e] w-full py-3 outline-none px-2' value={form1.date} name='date'   />


          <div className=' w-full mt-5 flex justify-center bg-[#f6ee16] text-black rounded-lg'>
            <button type='submit' className='w-full text-2xl rounded-lg hover:bg-[#0e1628] border-2 border-[#f6ee16] font-bold text-black  hover:text-[#0ea5e9] hover:border-2 hover:border-white py-2'>Next</button>
          </div>
        </form>
      </div>
  )
}

export default Form1
