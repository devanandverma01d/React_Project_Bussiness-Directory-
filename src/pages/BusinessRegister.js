import React from 'react'

export default function BusinessRegister() {
  return (
    <div>
      <main><h1 className='text-center mt-2 mb-2'>Business Register</h1>
        <div className='login_form'>
          <form>
          <label htmlFor="email" className="form-label">Business Category</label>
          <select className="form-select" aria-label="Default select example">
            <option>Select Business Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label htmlFor="email" className="form-label">City</label>
          <select className="form-select" aria-label="Default select example">
            <option>Select City</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Business Name</label>
              <input type="email" name="email"  className="form-control" id="email" />
            </div>
            <button type="button" className="btn btn-primary">Business Register</button>
          </form>
        </div>
      </main>
    </div>
  ) 
}
