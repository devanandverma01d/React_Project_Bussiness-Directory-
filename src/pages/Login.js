import React from 'react'

function Login() {
  return (
    <>
      <main><h1>---Login_form---</h1>
        <div className='login_form'>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Id</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
        
            <button type="button" className="btn btn-primary">Submit</button>
            </form>
        </div>
      </main>
    </>
  )
}

export default Login;
