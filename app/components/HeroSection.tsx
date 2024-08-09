import Image from "next/image";

export default function HeroSection(){
    return(
        <div className="bg-pos bg-small  bg-no-repeat bg-ornament ">
        <div className="flex justify-between items-center pt-20 ">
            <div className="flex flex-col gap-8 justify-start  w-[500px]">
                <p className="text-6xl font-medium leading-85px">Gift4Cash - Unlock Your Money
                </p>
                <p className="text-xl leading-8 text-gray-400 ">
                We redeem your Gift Cards so that you can spend your money however you want.
                </p>
                <button className="w-40 h-14 py-4 px-8 bg-green text-white rounded-md	">
                    Gift a Card
                </button> 

            </div>
                <Image src="/hero.svg" alt="hero" width={500} height={540} className="hidden md:block lg:block" ></Image>
        </div>
        </div>
    )
}