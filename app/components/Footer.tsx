import Image from "next/image";

export default function Footer(){
    return(
        <div className="flex flex-col bg-gradient-to-t from-[#69D0AF] to-transparent  pt-40">
        <div className="flex px-10 py-20 justify-between items-center ">
            <div className="flex flex-col gap-4 ">
                <div className="flex  gap-2">
<Image src="/logo.svg" alt='logo' width={50} height={50} />
<p className="font-medium text-6xl" > Gift4Cash</p>
                </div>
<p className="lg:w-[523px] sm:hidden" >Experience secure and convenient gift card redemption with Gift4Cash. Trusted by thousands, we offer fast and reliable service for all your needs.</p>

            </div>
<div className="flex gap-20 lg:flex sm:hidden" >
            <div className="flex flex-col gap-4 ">
                <p className="font-semibold ">
                    Product
                </p>
                <p>Home</p>
                <p>Get Started</p>

            </div>
            <div className="flex flex-col gap-4 ">
                <p className="font-semibold ">
                    Resources
                </p>
                <p>Terms of Use</p>
                <p>Terms of Sale</p>
                <p>Privacy Policy</p>
                <p>Affiliate Disclosure</p>
                <p>Financial Disclosure</p>

            </div>

</div>
        </div>
        <p className="font-medium text-gray-500 text-center pb-10 " >@2024 Insomnia Technologies LLC D.B.A.Gift4Cash</p>
        </div>

    )
}