import React, { useRef } from 'react'
import { useState } from 'react'

type formData = {
    name: string;
    email: string;
    message: string;
}   
const Form = () => {
    const [submitted, setSubmittedData] = useState<formData>({

        name:'',
        email:'',
        message:''  
    })//Instead of using useState for every input, you:

//✔ Read values directly
//✔ Don’t re-render on every keystroke
//✔ Keep it simple for small forms
    const name=useRef<HTMLInputElement>(null)
    const email=useRef<HTMLInputElement>(null)
    const message=useRef<HTMLTextAreaElement>(null)

   
  return (
<form>
    <input type="text" ref={name} placeholder="Name" />
    <input type="email" ref={email} placeholder="Email" />
    <textarea ref={message} placeholder="Message"></textarea>
    <button type="submit" onClick={(e) => {
  e.preventDefault();

  setSubmittedData({
    name: name.current?.value || '',
    email: email.current?.value || '',
    message: message.current?.value || ''
  });

  // 👉 Clear inputs after submit
  if (name.current) name.current.value = '';
  if (email.current) email.current.value = '';
  if (message.current) message.current.value = '';
}}>Submit</button>  


    <h3>Submitted Data:</h3>
    <p>Name: {submitted.name}</p>
    <p>Email: {submitted.email}</p>
    <p>Message: {submitted.message}</p>


</form>
  )
}

export default Form
