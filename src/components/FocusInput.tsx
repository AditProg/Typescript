import React, { useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
   
   <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
   </div>
  )
}

export default FocusInput
