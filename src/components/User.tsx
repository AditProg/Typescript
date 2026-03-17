
type UserProps = {
  name: string;
  age: number;
  isStudent: boolean;
}
const User = (props: UserProps) => {
  return (
    <div>
      <h1>  {props.name} </h1>
      <p>Age: {props.age}</p>
  <h2>Is Student: {props.isStudent ? "Yes" : "No"}</h2>  
    </div>
    // another way to write the same code is by destructuring the props
    // const User = ({ name, age, isStudent }: UserProps) => {
    //   return (
    //     <div>
    //       <h1>  {name} </h1>
    //       <p>Age: {age}</p>
    //   <h2>Is Student: {isStudent ? "Yes" : "No"}</h2>  
    //     </div>
    
  )
}

export default User
