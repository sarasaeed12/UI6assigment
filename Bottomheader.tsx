// import React from 'react'
// import image from 'next/image'

// const Bottomheader = () => {
//   return (
//     <div>
//       {/* <Image
//         src="/logo.png"
//         width={130}
//         height={47}
//         alt="card"
//      </Image>
//     </div> */}
//   )
// }

// export default Bottomheader

import Link from "next/link"
import Image from "next/image"

const Bottomheader = () => {
  return (
        <header>
          
          <div className=' flex justify-between items-center w-full h-[72px] bg-slate-200 py-6'>
        {/* < Link href="#" className="text-xl font-bold">Ddsgnr</Link> */}
        <div className="w-[140x] h-[45px] ">
          <Image src={"/images/logo.png"} alt="logo-image" width={140} height={45}></Image></div>
           
      <nav className="flex gap-6 justify-center items-center ;
]">

      < Link href="#" className="hover:text-blue-600">Home</Link>
      < Link href="#" className="hover:text-blue-600">Courses</Link>
      < Link href="#" className="hover:text-blue-600">Services</Link>
    < Link href="#" className="hover:text-blue-600">Achievement</Link>
     < Link href="#" className="hover:text-blue-600">About Us</Link>
     < Link href="#" className="hover:text-blue-600">Testimonial</Link>       
     </nav>
     <div className="flex gap-4">
        <button className="text-sm px-4 py-2 border rounded hover:bg-gray-100 w-[80px] h-[40px]">Login</button>
        <button className="text-sm px-4 py-2 bg-black
  text-white rounded hover:bg-black w-[95px] h-[40px]">Sign Up</button>
     
    

      </div>
      </div>
         
         
        
        </header>

           
          
          
         
     
  )
}

export default Bottomheader
