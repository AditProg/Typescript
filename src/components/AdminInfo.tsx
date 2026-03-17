
import React from "react"
import type { AdminInfoList } from "../types"


const AdminInfo=({id,name,email,role,lastLogin}:AdminInfoList)=> {
  return (
    <div style={{ padding: '20px' ,color:'blue', border: '1px solid blue', margin: '10px' }}>
      <h2>Admin Information</h2>

      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>ID: {id}</p>
      <p>Role: {role}</p>
      <p>Last Login: {lastLogin.toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo 