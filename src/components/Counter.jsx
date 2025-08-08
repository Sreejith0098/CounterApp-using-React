import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount] = useState(0)

    function Increment(){
         setCount(count+1)
    }
    function Decrement(){
        setCount(count-1)
    }
    function Reset(){
        setCount(0)
    }
  return (
    <div style={{height:'100vh', width:'100%' }} className='d-flex justify-content-center align-items-center bg-dark' >
        <div className='border border-2 rounded-3 p-5'  style={{width:'400px', backgroundColor:'#ffd3c4'}} >
     
            <h1 className='text-center'>Counter App</h1>
            <h1 className='text-center bold'>{count}</h1>
           
            <div className='mt-4'>
            <button onClick={Increment}  className='btn btn-primary  '>Increment</button>
            <button onClick={Decrement} className='btn btn-warning ms-2'>Decrement</button>
            <button onClick={Reset} className='btn btn-danger ms-2'>Reset</button>
            </div>
      
        </div>
    </div>
  )
}

export default Counter