import React, { useState } from "react";
import "../components/Style.css";
const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("")
  const[id,setId]=useState("");
  const[allEntry,setAllEntry]=useState([]);
  // const submitdata=()=>{
    
  //   console.log(email+""+password)
  // }
  const submitForm=(e)=>{
    e.preventDefault()
   const newEntry={id:id,email:email,password:password}
   setAllEntry([...allEntry, newEntry]);
    console.log(email+""+password+""+id)
  }

  console.log(allEntry);

  const deletedata=(id)=>{
    alert("ghj")
      let data=allEntry.filter((el)=>{
        return el.id!==id; 
  })
  setAllEntry(data)
  }


  return (
    <div className="center">
      <h1>Hello form</h1>
      <form action=""onSubmit={submitForm}>
        Id:<input type="text" name="" id="id" onChange={(e)=>setId(e.target.value)}/>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name=""
              id="email"
              placeholder="Enter your Email"
              // autoComplete="off"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="text"
              name=""
              id="password"
              placeholder="Enter Your password"
              // autoComplete="off"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}

            />
          </label>
        </div>
        <button >Submit</button>
      </form>

      {allEntry.map((el)=>(
        <>
        <h1>{el.email}</h1>
        <h1>{el.password}</h1>
        <button onClick={()=>deletedata(el.id)}>Delete</button>
        </>
      )

      )}
    </div>
  );
};

export default Login;
