import React from 'react'
import { useReducer } from 'react'


type State = {
    count: number;
}

type Action = 
| { type: 'increment' }
| { type: 'decrement' }

const initialState: State = {
    count: 0
}

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };              

        default:
            return state;
    }
}

const Counter3 = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
  return (

    <div style={{ border: '1px solid black', padding: '10px', margin: '40px' }} >
        <p>Count: {state.count}</p>
        <button style={{ marginRight: '10px', color: 'blue' }}  onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button style={{ color: 'red' }} onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  )
}

export default Counter3