
import { useState } from 'react';
import './App.css';

function App() {

    const[ eqn,setEqn]=useState("");
    const [res ,setRes]=useState("");
    const [ae,setAE]=useState(false);

    const operations =['/','*','-','+'];

    const clear=()=>{

      setEqn("");
      setRes("");
      
    }
    const onbuttonclick =(val)=>{

      

      if(val==='='){
        setEqn(res);
        setAE(true);
        return 
      }
      
      if(operations.includes(val) && (eqn==="" || operations.includes(eqn.slice(-1)) )){
        return ;
      }
      if( !operations.includes(val)){
        if(ae){
        
          setEqn(val);
          setRes(val);

        }else{
        let new_eqn=eqn+val;
        setEqn(new_eqn);
       
        let ans= eval(new_eqn);
        ans=ans.toString();
        setRes(ans);
        }
      }else{
        setEqn(eqn+val);
      }
      setAE(false);
    }





  return (<>
  <h1
  class="extrabold  text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 m-1 text-center"
>
My Calculator
</h1>
    <div className="bg-gradient-to-r from-green-300 to-purple-400 min-h-screen  flex items-center justify-center ">
      
      <div className='grid bg-white p-8 grid-cols-4 gap-x-4 gap-y-2 text-2xl rounded-lg '>
        <div className='col-span-4 '>

          <input className=' bg-black text-3xl text-white text-right p-10 w-full' value={eqn} readOnly></input>
          <input  className=' bg-black text-xl text-white text-right p-6 w-full ' value={res} readOnly></input>
        </div>
        
        <button onClick={()=>{onbuttonclick('7')}}  className=' bg-black text-white p-5 rounded-lg '>7</button>

        <button onClick={()=>{onbuttonclick('8')}} className='bg-black text-white p-5 rounded-lg '>8</button>

        <button onClick={()=>{onbuttonclick('9')}} className='bg-black text-white p-5 rounded-lg '>9</button>

        <button onClick={()=>{onbuttonclick('/')}} className='bg-rose-500 text-white p-5 rounded-lg '>/</button>

        <button onClick={()=>{onbuttonclick('4')}} className='bg-black text-white p-5 rounded-lg '>4</button>

        <button onClick={()=>{onbuttonclick('5')}} className='bg-black text-white p-5 rounded-lg '>5</button>

        <button onClick={()=>{onbuttonclick('6')}} className='bg-black text-white p-5 rounded-lg '>6</button>

        <button onClick={()=>{onbuttonclick('*')}} className='bg-rose-500 text-white p-5 rounded-lg '>*</button>

        <button onClick={()=>{onbuttonclick('1')}} className='bg-black text-white p-5 rounded-lg '>1</button>

        <button onClick={()=>{onbuttonclick('2')}} className='bg-black text-white p-5 rounded-lg '>2</button>

        <button onClick={()=>{onbuttonclick('3')}} className='bg-black text-white p-5 rounded-lg '>3</button>

        <button onClick={()=>{onbuttonclick('-')}} className='bg-rose-500 text-white p-5 rounded-lg '>-</button>

        <button onClick={clear} className='bg-rose-600 text-white p-5 rounded-lg '>C</button>

        <button onClick={()=>{onbuttonclick('0')}} className='bg-black text-white p-5 rounded-lg '>0</button>

        <button onClick={()=>{onbuttonclick('=')}} className='bg-amber-300 text-black p-5 rounded-lg '>=</button>

        <button onClick={()=>{onbuttonclick('+')}} className='bg-rose-500 text-white p-5 rounded-lg '>+</button>

      </div>




    </div>
  </>
  );
}

export default App;
