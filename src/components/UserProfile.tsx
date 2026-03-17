
import { useState } from 'react'

interface UserProfileState {
    name: string;
    age: number;
    email: string;
}


const UserProfile = () => {
    const [profile, setProfile] = useState<UserProfileState>({
    name: "",
    age: 0,
    email: '',  
    })
  return (
    <div>
   <input type="text" value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})} placeholder="Name" />
   <input type="number" value={profile.age} onChange={(e) => setProfile({...profile, age: Number(e.target.value)})} placeholder="Age" />
   <input type="email" value={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value})} placeholder="Email" />
<button onClick={() => console.log(profile)}>Save Profile</button>

<h3>Profile Information:</h3>
<p>Name: {profile.name}</p>
<p>Age: {profile.age}</p>
<p>Email: {profile.email}</p>   
    </div>
  )
}

export default UserProfile
