import React, { type FC } from 'react'
import { useContext } from 'react'
import { Mycontext } from '../context/Mycontext'



const Counter1 :FC= () => {
    const { count, increment, decrement } = useContext(Mycontext)
    
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '40px' }} >
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter1
