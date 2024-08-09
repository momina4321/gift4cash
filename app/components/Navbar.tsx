import Image from "next/image";

export default function Navbar() {
    return (
      
  
       <nav className="hidden sm:flex justify-between ">
         <div className="flex items-center">
         <Image src="/logo.svg" alt="logo" width={50} height={50} className="mr-3"></Image>
  <p className="text-black font-bold text-4xl">Gift4Cash</p>
  </div>
  <button className="w-40 h-14 py-4 px-8 bg-green text-white rounded-md	">Start Now</button>
  </nav>
          
          
    );
  }