import React from 'react'
import data from "../assets/404.webp"
import Image from 'next/image'
import { useRouter } from 'next/router'
const custom404 = () => {
  const router = useRouter()
  return (
    <div  style={{
      display: "flex",
      justifyContent : "center",
      alignItems : "center"
      
    }}>
    <Image  
    src={data}
    width={800}
    height={600}
   
    />
    <button className='btn btn-dark' onClick={() => router.push("/Main")}>Go Back</button>
    </div>
    
  )
}

export default custom404