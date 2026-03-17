import User from "./components/User"
import Button from "./components/Button"
import UserInfo from "./components/UserInfo"
import AdminInfo from "./components/AdminInfo"
import type { Info, AdminInfoList } from "./types"
import Counter from "./components/Counter"
import TodoList from "./components/TodoList"
import Form from "./components/Form"

import UserProfile from "./components/UserProfile"
const App = () => {



  const user:Info={
    id:1,
    name: "Aditya",
    email: "aditya@example.com"

  }
  const admin:AdminInfoList={
    id:2,
    name: "sable",
 
    email: "admin@example.com",
    role: "Administrator",
    lastLogin:new Date()
  }


  return (
    <div>


      
      <User name="Aditya" age={30} isStudent={true} />
      <UserInfo user={user} />
      <AdminInfo
        id={admin.id}
        name={admin.name}
        email={admin.email}
        role={admin.role}
        lastLogin={admin.lastLogin}
      />
      <Counter />
     
     
      <Button label="Click me"  onClick={() => console.log("Button clicked!")} disabled={false}   />
   <UserProfile />
   <TodoList />
    <Form />
   </div>
  )
}

export default App
