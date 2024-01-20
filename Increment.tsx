import React from 'react'
import { useState } from 'react'


export default function App(){

    const [count , setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    };

    const decrement = () =>{
        setCount(count - 1);
    };

    return(
        <div className=" iems-center ml-16 w-24 h-10">
            <h1 className='flex justify-center'>Count: {count}</h1>
            <div className='flex justify-center border-red-500 w-24 h-10'>
            <button className=" border-white flex justify-center ml-10"onClick={increment}>+</button>
            <button className=' border-white flex justify-center ml-20' onClick={decrement}>-</button>
        </div>
        </div>
    )
}