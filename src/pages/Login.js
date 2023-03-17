import React from 'react'
import swal from 'sweetalert';
function Login() {
  //1.Hooks area
  //2.function definition area
  let myLogin=()=>{
    //alert("Hi mylogin")
    const e = document.querySelector('input[name="email"]').value;
    const p = document.querySelector('input[name="password"]').value;
    console.log(e)
    console.log(p)
    fetch(`http://localhost:1337/api/auth/local`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        "identifier": e,
        "password": p
      })
    })
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data)
      if(data.data!==null){
        swal("Yes!", "Login Successfully", "success");
        window.localStorage.setItem("jwt_token",data.jwt)
        window.location.href="/business_register"
      }else{
        swal("No!", "Bad Credentials!", "error");
      }
    })
    .catch((err)=>err)
  }
  //3.return Statement 
  return (
    <>
      <main><h1 className='text-center mt-2 mb-2'>---Login_form---</h1>
        <div className='login_form'>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Id</label>
                    <input type="email" name="email"  className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                </div>
        
            <button type="button" className="btn btn-primary" onClick={myLogin}>Submit</button>
            </form>
        </div>
      </main>
    </>
  )
}

export default Login;
