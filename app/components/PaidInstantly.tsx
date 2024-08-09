import Image from "next/image";


export default function PaidInstantly(){
    return (
        <div className="flex flex-col gap-12 justify-center items-center ">
<p className="text-green text-3xl font-semibold sm:text-xl lg:text-3xl">PAID INSTANTLY</p>
<p className="font-medium lg:text-5xl sm:text-4xl  ">Get Paid While on the Phone!</p>
<p className="font-medium text-xl text-gray-500 leading-8 text-center w-[1040px] hidden lg:block">Our processes are simple, quick, and secure! Redeem your gift card in as quick as 10 minutes! We offer instant payment methods such as PayPal so you can get paid before you hang up!</p>
 <Image src="/paidinstantly.svg" alt="phone" width={333} height={680} className="lg:w-[333px] w-[200px]" /> 
        </div>
    )
}