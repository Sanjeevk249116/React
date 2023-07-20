import React, { useState } from 'react'

function UseStateArrAy() {
    const Array=[
        {
            id:1,
            name:"Sanjeev",
            age:21, 
        },
        {
            id:2,
            name:"Arman",
            age:22,    
        },
        {
            id:3,
            name:"Amrit",
            age:21, 
        }
    ]
    const[clearBtn,setClearBtn]=useState(true);
    const [clear,setClear]=useState(Array)
    const[submit,setSubmit]=useState("Logout")
   

    const clearArray=()=>{
    //    (clearBtn ?( setClear([])):(setClear(Array)))
    // <----important----->
    // ([...ArrayName,changeData="vb"])
    // ({...MimeTypeArray,myNane="sanjeev"})
    if(clearBtn){
        setClear([]);
        setClearBtn(false);
        setSubmit("Login")
    }
    else{
        setClear(Array);
        setClearBtn(true);
        setSubmit("Logout")
    }
    }

    const DeleteItems=(id)=>{
        alert(id)
       let newArray=clear.filter((el)=>{
        return el.id!==id;
       })
       setClear(newArray)
    }
  return (
    <div>
      {
        clear.map((el)=>(
           <div>
             <h1>Name: {el.name}</h1>
            <h4>Age:{el.age}</h4>
            <button onClick={()=>DeleteItems(el.id)}>Remove</button>
           </div>
        ))
      }
      <button className='btn1' onClick={clearArray}>{submit}</button>
    </div>
  )
}

export default UseStateArrAy;
