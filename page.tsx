import Image from "next/image";

import Topheader from "./components/Navbar/Topheader"
import Bottomheader from "./components/Navbar/Bottomheader";
import Hero from "./components/Hero";
import { Avatar } from "@radix-ui/react-avatar";







export default function Home() {
  return (
    <div>
      
   
    <Topheader />
    <Bottomheader />
    <Hero />
    
  
   

    
    </div>
  );
}
