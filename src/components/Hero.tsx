
import { GetStarted } from "./GetStarted";
import App from "./Slider"; 

export default function HeroPage() {
    return (
        <div>
            <div className="relative w-full h-[800px] md:h-[900px] lg:h-[700px] 2xl:h-[900px]">
                <img src="/landing-hero.png" alt="heroimage" className="w-full h-full object-cover rounded-b-3xl" />

                <div className="absolute inset-0 flex flex-row justify-between lg:px-28 2xl:px-40 items-center text-white text-center"> 
                    <div className="flex flex-col justify-center items-start pr-4"> 
                        <div className="text-5xl lg:text-6xl 2xl:text-7xl font-extrabold">Your Dream Trip!</div>
                        <div className="text-5xl lg:text-6xl 2xl:text-7xl font-extrabold">Tailored just for You!</div>
                        
                        <div className="flex flex-col justify-normal items-start pt-48 md:pt-30 lg:pt-8 pb-4 text-xl font-medium gap-2">
                            Experience travel like never before, made just for you!
                        </div>
                        <GetStarted />
                    </div>

                    <div className="w-1/4 shadow-2xl hidden lg:block">
                        <App />
                    </div>
                </div>
            </div>
        </div>
    )
}
