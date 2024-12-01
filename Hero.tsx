import Image from "next/image"
import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Hero = () => {
  return (
    <div className=" flex flex-col justify-between min-h-screen ">
       <div className=" flex flex-col items-start w-full py-20 mt-9 ">
      <h1 className='text-left text-3xl lg:text-5xl font-bold mb-4 mx-6' >Learn new skills<br /> online with ease</h1>
      <p className="text-left mx-6">Discover a wide range of courses covering a variety of<br /> 
      subjects, taught by expert instructors.</p>
      </div> 

      <div className="flex gap-4 justify-center lg:justify-start">
         <button className="px-7 py-4 bg-black text-white rounded hover:bg-slate-600 mx-6">Start learning now</button>
         <button className="px-7 py-4 border border-black rounded hover: bg-slate-200 outline-black mx-6">Explore Courses</button>
      </div>

      <div className="flex justify-center items-center absolute right-0  w-[640 px] h-[900]">
      <Image className="shadow-lg w-80 lg:w-[640px]"src={"/images/Image.png"} alt="container_image" width={640} height={900}></Image>
      
    </div>

    < div className="mt-8  lg:mt-0 lg:ml-12 flex justify-center items-center w-[1280px] h-[940px] ">
    
    <div className="w-full bg-slate-100 py-8">
    
    <div className="flex justify-center items-center m-0">
    <h5 className="text-3xl font-black w-[320] h-[68]">Trusted by 2000+ companies <br/>worldwide.</h5>
      <Image src={"/images/Airbnb Logo.png"} alt="logo1" width={123} height={38}></Image>
      <Image src={"/images/2.png"} alt="logo2" width={123} height={38}></Image>
      <Image src={"/images/3.png"} alt="logo3" width={123} height={38}></Image>
      <Image src={"/images/4.png"} alt="logo4" width={123} height={38}></Image>
      <Image src={"/images/5.png"} alt="logo5" width={123} height={38}></Image>
      <Image src={"/images/6.png"} alt="logo6" width={123} height={38}></Image>

    </div>

    </div>
    </div>


    <div className="w-[1280] h-[1049]">
      <h2 className="flex justify-center items-center text-3xl font-black w-[768] h-[58] text-left">Explore Courses By Category</h2>
      <p className="text-center text-black p-4 text-sm w-[768] h-[109] ">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
    </div>

    <div className="flex justify-center items-center">
       
       <Image src={"/images/cards.png"} alt="container_image" width={1920} height={1080}></Image>
       
       </div>

       <div className="flex justify-center items-center">
       <button className="px-7 py-4 border border-black rounded hover: bg-white outline-black m-20">View All Courses</button>

       </div>

       <div className="flex justify-center items-center w-[1280] h-[488]">
        <h2 className="flex justify-center items-center font-black text-3xl m-20">Our Achivements</h2>
       </div>


       <div><p className="flex justify-center items-center text-center m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br/>ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p></div>

       <div className="flex justify-center items-center gap-60 m-8 ">
        <div className="flex justify-center items-center w-[296] h-[80]">
          <h3 className="flex justify-center items-center font-black text-3xl">+200</h3>
          
        </div>
        <div>
        <h3 className="flex justify-center items-center font-black text-3xl">50K</h3>
        </div>
        <div>
        <h3 className="flex justify-center items-center font-black text-3xl">370k</h3>
        </div>
        <div>
        <h3 className="flex justify-center items-center font-black text-3xl">100+</h3></div>
       </div>

       <div className="flex justify-center items-center gap-60 m-9 p-10 ">
        <div className="flex justify-center items-center w-[296] h-[80]">
          <p className="flex justify-center items-center font-black w-[59] h-[24] mx-4">Courses</p>
        </div>
        <div>
        <p className="flex justify-center items-center font-black ">Mentors</p>
        </div>
        <div>
        <p className="flex justify-center items-center font-black ">Students</p>
        </div>
        <div>
        <p className="flex justify-center items-center font-black ">Recognition</p></div>
       </div>




       <div className="w-[1280px] h-auto mx-auto">
  <div>
    <h1 className="font-black text-center mb-4 text-[56px] leading-[67.2px]">Courses</h1>
    <p className="font-normal text-[18px] leading-[27px] text-center py-3">Your Ultimate Guide to Learning</p>
  </div>
  <div className="flex justify-center gap-4 mb-8">
    <p className="underlined">Popular</p>
    <p className="underlined">Recommended</p>
    <p className="underlined">Best Price</p>
  </div>

  {/* Course Cards Grid */}
  <div className="grid grid-cols-3 gap-8">
    {/* 1st Course */}
    <div className="flex flex-col w-[416px] bg-slate-200">
      <Image src="/images/b1.png" alt="course1" width={416} height={300} />
      <div className="px-4">
        <p className="font-semibold text-[14px] leading-[21px] mt-2">Design</p>
        <p className="font-semibold text-[14px] leading-[21px] mt-2">5.0</p>
        <h5 className="font-bold text-3xl mt-2">UX/UI Design 201</h5>
        <p className="font-normal text-[16px] leading-[24px] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
        <div className="flex gap-9 items-center mt-7">
          <button className="text-black font-normal text-[16px] w-[117px] h-[40px] rounded-md border-[2px] border-black px-4 py-1 m-2">
            Enroll Now
          </button>
          <p className="font-medium text-[16px] leading-[24px]">$400</p>
        </div>
      </div>
    </div>

    {/* 2nd Course */}
    <div className="flex flex-col w-[416px] bg-slate-200">
      <Image src="/images/b2.png" alt="course2" width={416} height={300} />
      <div className="px-4">
        <p className="font-semibold text-[14px] leading-[21px] mt-2">Programming</p>
        <p className="font-semibold text-[14px] leading-[21px] mt-2">5.0</p>
        <h5 className="font-bold text-3xl mt-2">Introduction to Python</h5>
        <p className="font-normal text-[16px] leading-[24px] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
        <div className="flex gap-9 items-center mt-7">
          <button className="text-black font-normal text-[16px] w-[117px] h-[40px] rounded-md border-[2px] border-black px-4 py-1 m-2">
            Enroll Now
          </button>
          <p className="font-medium text-[16px] leading-[24px]">$400</p>
        </div>
      </div>
    </div>

    {/* 3rd Course */}
    <div className="flex flex-col w-[416px] bg-slate-200">
      <Image src="/images/b3.png" alt="course3" width={416} height={300} />
      <div className="px-4">
        <p className="font-semibold text-[14px] leading-[21px] mt-2">Business</p>
        <p className="font-semibold text-[14px] leading-[21px] mt-2">5.0</p>
        <h5 className="font-bold text-3xl mt-2">Data Analysis for Beginners</h5>
        <p className="font-normal text-[16px] leading-[24px] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
        <div className="flex gap-9 items-center mt-7">
          <button className="text-black font-normal text-[16px] w-[117px] h-[40px] rounded-md border-[2px] border-black px-4 py-1 m-2">
            Enroll Now
          </button>
          <p className="font-medium text-[16px] leading-[24px]">$400</p>
        </div>
      </div>
    </div>

    {/* 4th Course */}
    <div className="flex flex-col w-[416px] bg-slate-200">
      <Image src="/images/b4.png" alt="course4" width={416} height={300} />
      <div className="px-4">
        <p className="font-semibold text-[14px] leading-[21px] mt-2">Art</p>
        <p className="font-semibold text-[14px] leading-[21px] mt-2">5.0</p>
        <h5 className="font-bold text-3xl mt-2">Art Specialization</h5>
        <p className="font-normal text-[16px] leading-[24px] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
        <div className="flex gap-9 items-center mt-7">
          <button className="text-black font-normal text-[16px] w-[117px] h-[40px] rounded-md border-[2px] border-black px-4 py-1 m-2">
            Enroll Now
          </button>
          <p className="font-medium text-[16px] leading-[24px]">$400</p>
        </div>
      </div>
    </div>

    {/* 5th Course */}
    <div className="flex flex-col w-[416px] bg-slate-200">
      <Image src="/images/b5.png" alt="course5" width={416} height={300} />
      <div className="px-4">
        <p className="font-semibold text-[14px] leading-[21px] mt-2">Law</p>
        <p className="font-semibold text-[14px] leading-[21px] mt-2">5.0</p>
        <h5 className="font-bold text-3xl mt-2">Rule of Law</h5>
        <p className="font-normal text-[16px] leading-[24px] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
        <div className="flex gap-9 items-center mt-7">
          <button className="text-black font-normal text-[16px] w-[117px] h-[40px] rounded-md border-[2px] border-black px-4 py-1 m-2">
            Enroll Now
          </button>
          <p className="font-medium text-[16px] leading-[24px]">$400</p>
        </div>
      </div>
    </div>

    {/* 6th Course */}
    <div className="flex flex-col w-[416px] bg-slate-200">
      <Image src="/images/b6.png" alt="course6" width={416} height={300} />
      <div className="px-4">
        <p className="font-semibold text-[14px] leading-[21px] mt-2">Tech</p>
        <p className="font-semibold text-[14px] leading-[21px] mt-2">5.0</p>
        <h5 className="font-bold text-3xl mt-2">Introduction to Webflow</h5>
        <p className="font-normal text-[16px] leading-[24px] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
        <div className="flex gap-9 items-center mt-7">
          <button className="text-black font-normal text-[16px] w-[117px] h-[40px] rounded-md border-[2px] border-black px-4 py-1 m-2">
            Enroll Now
          </button>
          <p className="font-medium text-[16px] leading-[24px]">$400</p>
        </div>
      </div>
    </div>
  </div>

  <div className="flex justify-center mt-8">
    <button className="px-7 py-4 border border-black rounded hover:bg-slate-100">View All Courses</button>
  </div>
</div>




       {/* /our team / */}  
   <div className="flex justify-center  items-center  mt-100 m-6 p-9">
      <div className="flex flex-col justify-center items-center w-full bg-slate-100 gap-8 mt-5 px-6">
  
  <h1 className="text-3xl font-black text-[48px] leading-[57.6px] whitespace-nowrap">Our team</h1>
  <p className="font-normal text-[18px] leading-[27px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
<div>
  <Image src="/images/avatar.png" alt="course2" width={1000} height={650} />
  </div>
  
  </div> 
  </div>





       {/* Customer testimonials */}
<div className="w-[1280px] mx-auto">
  <h2 className="text-5xl font-black text-[48px] leading-[57px] mb-4">
    Customer testimonials
  </h2>
  <p className="font-normal text-[18px] leading-[27px] text-gray-600 mb-8">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>

  {/* Testimonial cards row */}
  <div className="flex justify-between gap-4">
    {/* Testimonial 1 */}
    <div className="flex flex-col items-start p-8 rounded-lg border-black w-[416px] h-[294px]">
      <ul className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            src="/images/starr.png"
            alt="star"
            width={20}
            height={18}
          />
        ))}
      </ul>
      <p className="text-start mb-4">"Lorem ipsum dolor sit amet,</p>
      <p> consectetur adipiscing elit.</p>
      <p>Suspendisse varius enim in eros</p>
      <p>elementum tristique. Duis cursus, mi</p>
      <p>quis viverra ornare."</p>
      <Image
        src="/images/Avatar Image.png"
        alt="avatar1"
        width={56}
        height={56}
        className="mt-4"
      />
      <h5 className="font-bold">James Nduku</h5>
      <p className="text-gray-700">Software Developer</p>
    </div>

    {/* Testimonial 2 */}
    <div className="flex flex-col items-start p-8 rounded-lg border-black w-[416px] h-[294px]">
      <ul className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            src="/images/starr.png"
            alt="star"
            width={20}
            height={18}
          />
        ))}
      </ul>
      <p className="text-start mb-4">"Lorem ipsum dolor sit amet,</p>
      <p> consectetur adipiscing elit.</p>
      <p>Suspendisse varius enim in eros</p>
      <p>elementum tristique. Duis cursus, mi</p>
      <p>quis viverra ornare."</p>
      <Image
        src="/images/Avatar Image2.png"
        alt="avatar2"
        width={56}
        height={56}
        className="mt-4"
      />
      <h5 className="font-bold">Erick Kipkemboi</h5>
      <p className="text-gray-700">Scrum Master</p>
    </div>

    {/* Testimonial 3 */}
    <div className="flex flex-col items-start p-8 rounded-lg border-black w-[416px] h-[294px]">
      <ul className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            src="/images/starr.png"
            alt="star"
            width={20}
            height={18}
          />
        ))}
      </ul>
      <p className="text-start mb-4">"Lorem ipsum dolor sit amet,</p>
      <p> consectetur adipiscing elit.</p>
      <p>Suspendisse varius enim in eros</p>
      <p>elementum tristique. Duis cursus, mi</p>
      <p>quis viverra ornare."</p>
      <Image
        src="/images/Avatar Image3.png"
        alt="avatar3"
        width={56}
        height={56}
        className="mt-4"
      />
      <h5 className="font-bold">Stephen Kerubo</h5>
      <p className="text-gray-700">Software Developer</p>
    </div>
  </div>
</div>


   {/* / footer section/ */}


<div className="w-[1120px] h-[524px]p-0 mx-auto p-11  mt-20">

<footer className="bg-white dark:bg-gray-900" m-20 py-10>
    <div className ="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className ="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
             
                  <img src="/images/logo.png" className="h-8 me-3" alt=" Logo" />
                  
             
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Courses</h2>
                  <ul className="text-black dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <p className="font-normal">Business</p>
                      </li>
                      <li className="mb-4">
                          <p className="font-normal">Development</p>
                      </li>
                      <li className="mb-4">
                          <p className="font-normal">Technology</p>
                      </li>
                      <li className="mb-4">
                          <p className="font-normal">Design</p>
                      </li>
                      <li className="mb-4">
                          <p className="font-normal">Programming</p>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-black dark:text-gray-400 font-medium">
                     <li className="mb-4">
                          <p className="font-normal">Career</p>
                      </li>
                      <li className="mb-4">
                          <p className="font-normal">Resume</p>
                      </li>
                      <li className="mb-4">
                          <p className="font-normal">Learning</p>
                      </li>
                      <li className="mb-4">
                          <p className="font-normal">Interview Preparation</p>
                      </li>
                      <li className="mb-4">
                          <p className="font-normal">Jobs</p>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About Us</h2>
                  <ul className="text-black dark:text-gray-400 font-medium">
                  <li className="mb-4">
                          <p className="font-normal">Contact</p>
                      </li>
                      <li className="mb-4">
                          <p className="font-normal">Help/Support</p>
                      </li>
                      <li className="mb-4">
                          <p className="font-normal">FAQ</p>
                      </li>
                      <li className="mb-4">
                          <p className="font-normal">Terms and Conditions</p>
                      </li>
                      <li className="mb-4">
                          <p className="font-normal">Partners</p>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-black sm:text-center dark:text-gray-400">2023 Ddsgnr. All right reserved.
          </p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies Settings</p>
         <div className="flex justify-center items-center gap-5">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <IoLogoLinkedin />
        </div>

           
      </div>
      



    </div>
</footer>

</div>
</div>
 )
}

export default Hero








