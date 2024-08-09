import Image from "next/image";


export default function HassleFree(){
    return (
        <div className="flex flex-col gap-12 justify-center items-center ">
<p className="text-green text-3xl font-semibold  sm:text-xl lg:text-3xl">HASSLE-FREE PROCESS</p>
<p className="font-medium text-5xl lg:text-5xl sm:text-4xl ">How does it work?</p>
<p className="font-medium text-xl text-gray-500 leading-8 text-center w-[1040px] lg:block hidden">We make it easy for you to redeem your gift cards. Our straightforward process is efficient to ensure we can get your money to you ASAP! After you call us, this is typically how the process works:</p>
       
       <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 items-start">

 <div className="flex flex-col gap-8 justify-center items-center shadow-lg rounded-3xl px-14 py-7 h-[390px]">
<Image src='/card1.svg' alt='gift' width={78} height={78}  />
<p className="text-xl font-medium">Get Your Gift Card Ready</p>
<p className="text-gray-500 leading-7 font-medium text-sm text-center h-[180px]  w-[316px]">Make sure you have your gift card handy! We will ask a couple of questions about your gift card such as if it's partially used, its balance, and why you're looking to redeem it</p>
 </div>

 <div className="flex flex-col gap-8 justify-center items-center shadow-lg rounded-3xl px-14 py-7 h-[390px]">
<Image src='/dolar-coin.svg' alt='dollar-coin' width={78} height={78}  />
<p className="text-xl font-medium">Receive a Quote</p>
<p className="text-gray-500 leading-7 font-medium text-sm text-center h-[180px] w-[316px]">Once we have the information we need about your gift card, we will quote you a price we can redeem the gift card for. Typically we redeem gift cards at 90% of their value, but this rate changes depending on market conditions.</p>
 </div>

 <div className="flex flex-col gap-8 justify-center items-center shadow-lg rounded-3xl px-14 py-7  h-[390px]">
<Image src='/handshake.svg' alt='handshake' width={78} height={78}  />
<p className="text-xl font-medium">Accept the Offer</p>
<p className="text-gray-500 leading-7 font-medium text-sm text-center  h-[180px]  w-[316px]">If you accept the offer, we will discuss payout options with you. Currently, we offer PayPal transfers to US residents with more payout options coming soon (even cash!).</p>
 </div>

 <div className="flex flex-col gap-8 justify-center items-center shadow-lg rounded-3xl px-14 py-7  h-[390px]">
<Image src='/info.svg' alt='info' width={78} height={78}  />
<p className="text-xl font-medium">Provide Information</p>
<p className="text-gray-500 leading-7 font-medium text-sm text-center  h-[180px]  w-[316px]">Once we've squared away how to pay you, we move onto redeeming the gift card! This involves us asking you some basic personal questions for the order and gathering more card information</p>
 </div>

 <div className="flex flex-col gap-8 justify-center items-center shadow-lg rounded-3xl px-14 py-7  h-[390px]">
<Image src='/receive.svg' alt='receive' width={78} height={78}  />
<p className="text-xl font-medium">Receive Your Payment</p>
<p className="text-gray-500 leading-7 font-medium text-sm text-center  h-[180px]  w-[316px]">If we successfully redeem your gift card's balance, we will get you paid! If you select to get paid via one of our instant methods, you'll be requested to stay on the line until you can confirm your payment.</p>
 </div>

 <div className="flex flex-col gap-8 justify-center items-center shadow-lg rounded-3xl px-14 py-7  h-[390px] ">
<Image src='/enjoy.svg' alt='smiley' width={78} height={78}  />
<p className="text-xl font-medium">Enjoy!</p>
<p className="text-gray-500 leading-7 font-medium text-sm text-center  h-[180px]  w-[316px]">That's it! Seriously, that's all there is to it.</p>
 </div>

       </div>
        <button className="w-80 h-14 py-4 px-8 bg-green text-white rounded-md	">
                Call Us Redeem your Gift Card</button>
       
        </div>
    )
}