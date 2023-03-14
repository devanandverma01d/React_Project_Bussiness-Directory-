import React from 'react'

function Register() {
  return (
    <>
      <main><h1>---Registeration form---</h1>
        <div className='login_form'>
            <form>
                <div className="mb-3">
                    <label htmlFor="UserID" className="form-label">UserID</label>
                    <input type="text" className="form-control" id="UserID" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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

export default Register;
