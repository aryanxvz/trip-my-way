import { GetStarted } from "./GetStarted";

export default function HeroPage() {
    return (
        <div>
            <div className="relative w-full h-[900px]">
                <img src="hero.png" alt="heroimage" className="w-full h-full object-cover rounded-b-3xl"/>
                <div className="absolute inset-0 flex flex-col justify-center items-start text-white text-center ml-40">
                    <div className="text-7xl font-extrabold py-2">Your Dream Trip!</div>
                    <div className="text-7xl font-extrabold">Tailored just</div>
                    <div className="text-7xl font-extrabold">for You!</div>
                    
                    <div className="flex flex-col justify-normal items-start pt-8 pb-4 text-xl font-medium gap-2">
                        Experience travel like never before, made just for you!
                    </div>
                    <GetStarted />
                </div>
            </div>
        </div>
    );
}
