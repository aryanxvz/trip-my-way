
import Cards from "./Cards";

export default function HeroPage() {
    return (
        <div>
            <div className="relative w-full h-[700px]">
                <img src="/heroimage.png" alt="heroimage" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 flex flex-col justify-center items-start text-white text-center ml-8">
                    <div className="text-6xl font-extrabold px-8 py-2">Your Dream Trip!</div>
                    <div className="text-6xl font-extrabold px-8">Tailored just</div>
                    <div className="text-6xl font-extrabold px-10">for You!</div>
                    
                    <div className="flex flex-col justify-normal items-start py-4 text-xl font-medium px-10 gap-2">
                        <span>Experience travel like never before,</span>
                        <span> made just for you!</span>
                    </div>
                    
                    <button className="bg-amber-800 py-2 px-4 mx-10 rounded-2xl">
                        Get Started
                    </button>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="text-5xl font-bold">Our Itineraries</div>
            </div>
            <Cards />

            <div className="flex justify-center">
                <div className="text-5xl font-bold">Why Choose Us?</div>
            </div>
        </div>
    );
}
