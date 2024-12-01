import React from 'react'
import image from "next/image"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";


const Topheader = () => {
  return (
    <div className="bg-slate-300 py-2 text-sm w-full flex items-center px-4">
  <div className="container mx-auto flex justify-between items-center">
    {/* Left Side: Phone Number and Email */}
    <div className="flex justify-start items-center gap-4">
      <p className="font-normal">Phone Number: 956 742 455 678</p>
      <p>Email: info@ddsgnr.com</p>
    </div>

    {/* Right Side: Social Media Icons */}
    <div className="flex gap-7 items-center">
      <FaFacebookF />
      <FaInstagram />
      <FaTwitter />
      <IoLogoLinkedin />
    </div>
  </div>
</div>

  )
}

export default Topheader
