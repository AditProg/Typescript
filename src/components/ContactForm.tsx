import React, { useState } from 'react'
import Form from './Form'


interface ContactFormData {
    name: string;
    email: string;
    message: string;
}
const ContactForm = () => {
const [formData, setFormData] = useState<ContactFormData>({
    name:'',
    email:'',
    message:''   

  })

  return (
    <div>
      <h1>Contact Us</h1>
        <label>
            Name:
            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        </label>
        <br />
        <label>//add validation for email input field
        
            Email:
            <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />   
        </label>
        <br />
        <label>
            Message:
            <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
        </label>
        <br />
        <button type="submit" onClick={() => console.log(formData)}>Submit</button>           

<h2>Contact Information </h2>
<p style={{ marginBottom: '10px' ,color:'black'}}>Name: {formData.name}</p>
<p style={{ marginBottom: '10px' ,color:'blue'}}>Email: {formData.email}</p>
<p style={{ marginBottom: '10px', color:'gold'}}>Message: {formData.message}</p>

<button onClick={() => setFormData({name:'', email:'', message:''})}>Clear Form</button>    
    </div>
  ) 
}

export default ContactForm
