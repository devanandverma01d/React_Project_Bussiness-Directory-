import React, { useEffect, useState } from 'react'

function Home() {
  //1. Hooks area
  const[items,setItems]=useState([])

  useEffect(()=>{
    fetch('http://localhost:1337/api/bussiness-catefories?populate=*')
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log('fetched data-->',data.data)
      setItems(data.data)
    })
    .catch()
  },[])
  console.log(items)
  //2. function definition
  //3. return Statement

  return (
    <>
        <main>
        <ul className='nav'>
        {
          items.map((cv,idx)=>{
            return <li key={idx} >
                      <a href='home' className='ima-cont'>
                        <img className='my_image list_items' src={'http://localhost:1337'+cv.attributes.image.data[0].attributes.url} alt=""/><br/>
                        <p className='w-25 text-center'>{cv.attributes.name}</p>
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
