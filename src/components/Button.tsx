import React from 'react'

// defining the props type for the Button component

const Button = (props:{ label: string; onClick: () => void; disabled: boolean }) => {
  return (
    <div>
      <button onClick={props.onClick} disabled={props.disabled}>
        {props.label}
                </button>

    </div>
    // another way to write the same code is by destructuring the props
    // const Button = ({ label, onClick, disabled }: { label: string; onClick: () => void; disabled: boolean }) => {
    //   return (
    //     <div>
    //       <button {onClick} {disabled}>
    //         {label}
    //       </button>
    //     </div>
    //   )
  )
}

export default Button
