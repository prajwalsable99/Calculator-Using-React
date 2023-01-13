
import { useState } from 'react';
import './App.css';

function App() {

    const[ curr,setCurr]=useState("");
    const [fin ,setFin]=useState("");

    const operations =['/','*','-','+'];

    const onbuttonclick =(val)=>{
      
      
    }





  return (
    <div className="bg-gradient-to-r from-emerald-50 via-emerald-300 to-emerald-600 min-h-screen  flex items-center justify-center ">

      <div className='grid bg-white p-4 grid-cols-4 gap-x-4 gap-y-2 text-2xl rounded-lg'>
        <div className='col-span-4 '>

          <input  className=' bg-black text-xl text-white text-right p-6 w-full ' value={curr} readOnly></input>
          <input className=' bg-black text-3xl text-white text-right p-10 w-full' value={fin} readOnly></input>
        </div>
        
        <button onClick={()=>{onbuttonclick('7')}}  className=' bg-black text-white p-5 rounded-lg '>7</button>

        <button onClick={()=>{onbuttonclick('8')}} className='bg-black text-white p-5 rounded-lg '>8</button>

        <button onClick={()=>{onbuttonclick('9')}} className='bg-black text-white p-5 rounded-lg '>9</button>

        <button onClick={()=>{onbuttonclick('/')}} className='bg-black text-white p-5 rounded-lg '>/</button>

        <button onClick={()=>{onbuttonclick('4')}} className='bg-black text-white p-5 rounded-lg '>4</button>

        <button onClick={()=>{onbuttonclick('5')}} className='bg-black text-white p-5 rounded-lg '>5</button>

        <button onClick={()=>{onbuttonclick('6')}} className='bg-black text-white p-5 rounded-lg '>6</button>

        <button onClick={()=>{onbuttonclick('*')}} className='bg-black text-white p-5 rounded-lg '>*</button>

        <button onClick={()=>{onbuttonclick('1')}} className='bg-black text-white p-5 rounded-lg '>1</button>

        <button onClick={()=>{onbuttonclick('2')}} className='bg-black text-white p-5 rounded-lg '>2</button>

        <button onClick={()=>{onbuttonclick('3')}} className='bg-black text-white p-5 rounded-lg '>3</button>

        <button onClick={()=>{onbuttonclick('-')}} className='bg-black text-white p-5 rounded-lg '>-</button>

        <button onClick={()=>{onbuttonclick('C')}} className='bg-black text-white p-5 rounded-lg '>C</button>

        <button onClick={()=>{onbuttonclick('0')}} className='bg-black text-white p-5 rounded-lg '>0</button>

        <button onClick={()=>{onbuttonclick('=')}} className='bg-black text-white p-5 rounded-lg '>=</button>

        <button onClick={()=>{onbuttonclick('+')}} className='bg-black text-white p-5 rounded-lg '>+</button>

      </div>




    </div>
  );
}

export default App;
