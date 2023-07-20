import React, { useState } from 'react'

function Hook() {
    let val="Sanjeev Kushwaha"
    const [name,setName]=useState(val);
    const[namet,setNamet]=useState(false);
    const changeName=()=>{
       if(namet===false){
        setName("Sankeev kushwaha Masai School")
        setNamet(true);
       }
       else{
        setName(val);
        setNamet(false);
       }
    }
    return (
     <>
      <div>
       <h1>{name}</h1>
       <button className='btn'onClick={changeName}>Submit Me</button>
      </div>
     
     </>
    )
}

export default Hook
