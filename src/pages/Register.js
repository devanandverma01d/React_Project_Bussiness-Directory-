import React, { useState } from 'react'
import swal from 'sweetalert';
function Register() {
  //1.Hooks Area
  const[payload,setPayload]=useState({})
  //2. Function definition area
  let registerUser=()=>{
    //alert("Hello")

    const u = document.querySelector('input[name="userid"]').value;
    const e = document.querySelector('input[name="email"]').value;
    const p = document.querySelector('input[name="password"]').value;
    // console.log(u)
    // console.log(e)
    // console.log(p)
    
    fetch(`http://localhost:1337/api/auth/local/register`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        "username": u,
        "email": e,
        "password": p
      })
    })
    .then((res)=>{
      console.log("Response--->",res);
      if(res.ok===true){
        swal("Good job!", "You clicked the button!", "success");
        return res.json()

      }else{
        swal("Bad job!","You clicked the button!","error");
      }
    })
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>{
      return err
    })
  }
  console.log(payload)
  
  //3. Return statement
  return (
    <>
      <main><h1>---Registeration form---</h1>
        <div className='login_form'>
            <form>
                <div className="mb-3">
                    <label htmlFor="UserID" className="form-label">UserID</label>
                    <input type="text" name="userid" className="form-control" id="UserID" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                </div>
        
            <button type="button" className="btn btn-primary" onClick={registerUser}>Submit</button>
            </form>
        </div>
      </main>
    </>
  )
}

export default Register;
