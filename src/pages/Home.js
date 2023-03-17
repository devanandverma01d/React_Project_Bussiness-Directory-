import React, { useEffect, useState } from 'react'

function Home() {
  //1. Hooks area
  const[items,setItems]=useState([])
  useEffect(()=>{
    fetch('http://localhost:1337/api/images?populate=*')
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data.data)
      setItems(data.data)
    })
    .catch()
  },[])
  //2. function definition
  //3. return Statement

  return (
    <>
        <main>
        <h1>Home page</h1>
        <ul className='nav'>
        {
          items.map((cv,idx)=>{
            return <li key={idx} className='list_items'>
              <a href='#'>
                <img src={'http://localhost:1337'+cv.attributes.logo.data[0].attributes.url}/><br/>
                {cv.attributes.text}
              </a>
          </li>
          })
        }
        </ul>
        </main>
    </>
  )
}

export default Home;
