//1.Import area
import React, { useEffect, useState } from 'react'
//2. functio definition area
export default function BusinessRegister() {
  //1. Hooks area
  const[cities,setCities]=useState([])
  const[businessCategory,setBusinessCategory]=useState([])
  let url = 'http://localhost:1337';
  useEffect(()=>{
    // Call City API
    fetch(`${url}/api/cities`)
    .then(res=>res.json())
    .then(citydata=>{
      console.log('City API--->',citydata.data)
      setCities(citydata.data)
    })
    
    .catch(err=>err)
    // Call Business Category API
    fetch(`${url}/api/bussiness-catefories`)
    .then(res=>res.json())
    .then(b_cat_data=>{
      console.log('B-Category API--->',b_cat_data.data)
      setBusinessCategory(b_cat_data.data)
    })
    .catch(err=>err)
  },[])// End of useEffect.
  //2. Function definition area
  let RegisterBusinesses=(e)=>{
    e.preventDefault()
    //alert("He")
    let payload={
      "data": {
        "name": document.querySelector('input[name="business_name"]').value,
        "cities": [
          document.querySelector('Select[name="city_id"]').value,
        ]
      }
    }
    //end of payload
    fetch(`${url}/api/businesses`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log('business post--->',data)
    })
    .catch(err=>err)
  }
  
  //3.Return statement
  return (
    <div>
      <main>
        <h1 className='text-center mt-2 mb-2'>Business Register</h1>
        <div className='login_form'>
          <form>
            <label htmlFor="country" className="form-label">Country</label>
            <select className="form-select" aria-label="Default select example">
              <option>Select country</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="state" className="form-label">State</label>
            <select className="form-select" aria-label="Default select example">
              <option>Select State</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="city" className="form-label">City</label>
            <select className="form-select" name="city_id" aria-label="Default select example">
              {
                cities.map((cv,idx)=>{
                  return <option key={idx} value={cv.id}>{cv.attributes.name}</option>
                })
              }
            </select>
            <label htmlFor="email" className="form-label">Business Category</label>
            <select className="form-select" aria-label="Default select example">
            {
              businessCategory.map((cv,idx)=>{
              return <option key={idx} value={cv.id}>{cv.attributes.name}</option>
            })
            }
            </select>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Business Name</label>
              <input type="email" name="business_name"  className="form-control" id="email" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={RegisterBusinesses}>Business Register</button>
          </form>
        </div>
      </main>
    </div>
  ) 
}
//. Export area
