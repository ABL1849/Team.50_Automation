import React from 'react'
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import { useState } from 'react';


const DetailForm = () => {

  const [next, setNext] = useState(1);

  const nextHandler = () => {
    if(next < 3){
      setNext(next+1);
    }
  }

  return (
    <div className='w-1/3 rounded-xl flex flex-col justify-center gap-y-10 bg-black items-center text-[white] h-[90%] shadow-lg shadow-black '>
      <p className='text-[#0ea5e9] text-[2.4rem] font-bold'>Personal Details</p>

      {
        next == 1 ? <Form1></Form1> : next == 2 ? <Form2/> : next == 3 && <Form3/> 
      }
    </div>
  )
}

export default DetailForm
