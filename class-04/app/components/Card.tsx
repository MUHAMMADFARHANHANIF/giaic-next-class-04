import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Card = (prop:{img:string,name:string,rollnumber:string,likes:string,class:string,day:string}) => {
  return (
    <>
    <div className="  m-3  ">
    <div  className="bg-white shadow-lg w-72 border-2 border-dashed  rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <div className="flex items-center p-4">
        <img
          src={prop.img}
          alt={`${prop.name}'s profile`}
          className="w-14 h-14 rounded-full border-2 border-gray-300 mr-4 object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{prop.name}</h2>
        
        </div>
      </div>
      <p className="text-gray-600 p-2">Roll Number : {prop.rollnumber}</p>
      <p className="text-gray-600 p-2 ">Student Name : {prop.name}</p>
      <p className="text-gray-600 p-2 ">Class : {prop.class}</p>
      <p className="text-gray-600 p-2 ">Day : {prop.day}</p>
      <div className="flex justify-between items-center p-4 border-t bg-blue-300">
          
        <span className="text-zinc-900 font-bold">Likes: {prop.likes || 0}</span>
        <Button>click me </Button>
      </div>

    </div>
  
</div>
    </>
  )
}

export default Card