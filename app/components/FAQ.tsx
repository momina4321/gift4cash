
import Image from "next/image";

export default function Faq(){
    return (
        <div className="flex flex-col gap-12  justify-center items-center ">
        <p className="text-green text-3xl font-semibold sm:text-2xl lg:text-3xl">FAQ</p>
        <p className="font-medium text-5xl lg:text-5xl sm:text-xl">Questions?</p>
        <p className="font-medium text-xl text-gray-500 leading-8 text-center w-[1040px] hidden lg:block">You can use our self-guided FAQ page to find an answer to our most common questions. If you are unable to find an answer to your question, give us a call! We would love the opportunity to answer any questions you may have.</p>
    
    
    <div className="flex flex-col gap-7 justify-between items-center  " >
      <div className="gap-5 text-base font-semibold hidden lg:flex ">  
        <p className=" text-green" >General</p>
        <p className="text-black" >Gift Cards</p>
        <p className="text-black" >Payment</p>
        <p className="text-black" >Support</p>
        <p className="text-black" >Orders</p>
        <p className="text-black" >Compliance</p>
 </div>
        <div className="flex flex-col  rounded-xl border-2 px-10 py-4 lg:w-[1280px] md:w-[900px]  sm:w-[700px]" >
             <div className="flex justify-between" >
                   <p className="text-green font-semibold" >What is Gift4Cash?</p>
                   <Image src="/vector.svg"  width={16} height={8} alt="vector" className="block sm:hidden" />
                   <Image src="/vector1.svg"  width={16} height={8} alt="vector" className="sm:block hidden" />

             </div>
             <div className=" flex-col gap-5 text-gray-500 font-medium pt-4 lg:flex hidden ">
          <p>  Gift4Cash is a Gift Card Redemption service. We help individuals convert their gift cards into cash. Although gift cards can be a thoughtful and valuable gift option, we believe people should have the flexibility to spend their money wherever and whenever they choose.</p> 
             <p>

Open-loop prepaid gift cards have increasingly faced usage constraints. They are often non-reloadable, and many merchants have begun blocking transactions involving these cards. Additionally, issuers frequently impose restrictions on where and how the cards can be used.

</p>
             </div>
            </div>

            <div className="flex flex-col rounded-xl border-2 px-10 py-4 lg:w-[1280px] md:w-[900px]  sm:w-[700px] " >
             <div className="flex justify-between" >
                   <p className="text-green font-semibold" >What is Gift4Cash?</p>
                   <Image src="/vector1.svg"  width={16} height={8} alt="vector" />
             </div>
            
            </div>

            <div className="flex flex-col rounded-xl border-2 px-10 py-4 lg:w-[1280px] md:w-[900px]  sm:w-[700px]" >
             <div className="flex justify-between" >
                   <p className="text-green font-semibold" >What is Gift Card Redemption?</p>
                   <Image src="/vector1.svg"  width={16} height={8} alt="vector" />
             </div>
            
            </div>

            <div className="flex flex-col rounded-xl border-2 px-10 py-4 lg:w-[1280px] md:w-[900px]  sm:w-[700px] " >
             <div className="flex justify-between" >
                   <p className="text-green font-semibold" >Why would I redeem a gift card?</p>
                   <Image src="/vector1.svg"  width={16} height={8} alt="vector" />
             </div>
            
            </div>

            <div className="flex flex-col rounded-xl border-2 px-10 py-4 lg:w-[1280px] md:w-[900px]  sm:w-[700px]" >
             <div className="flex justify-between" >
                   <p className="text-green font-semibold" >Is redeeming a gift card safe?</p>
                   <Image src="/vector.svg"  width={16} height={8} alt="vector"  />

             </div>
            
            </div>


            </div>
           
                </div>
    )
}