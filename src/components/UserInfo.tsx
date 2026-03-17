import React from 'react'
import type { Info } from '../types'    


type UserInfoProps={
    user:Info;
}   

const UserInfo :React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div style={{ padding: '20px' ,color:'green', border: '1px solid green', margin: '10px' }}>
      UserInfo Component  
      <h2>User Information</h2>  
        <p>Name: {user.name}</p>    
        <p>Email: {user.email}</p>
        <p>ID: {user.id}</p>


    </div>
  )
}

export default UserInfo
