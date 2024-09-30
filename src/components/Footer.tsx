import { FacebookIcon, InstagramIcon, TwitterIcon } from "./Icons"

export const Footer = () => {
    return (
        <footer className="bg-black shadow-[0_-4px_15px_rgba(0,0,0,0.2)] mt-20">
            <div className="container px-6 pt-12 pb-8 mx-auto">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-y-10">

                    <div>
                        <h1 className="max-w-lg text-2xl font-semibold tracking-tight text-white xl:text-2xl">
                            About the blog
                        </h1>
                        <div className="text-gray-200 text-lg pt-2">
                            We’re dedicated to sharing enchanting tales from our globe-trotting adventures, bringing you authentic experiences, hidden gems, and practical travel tips.
                        </div>
                    

                        <div className="flex justify-start mt-4">
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h1 className="max-w-lg text-2xl font-semibold tracking-tight text-white xl:text-2xl">
                            Newsletter
                        </h1>
                        <div className="text-gray-200 text-lg pt-2">
                            Subscribe now to fuel your wanderlust, and join our community of passionate explorers. Don’t miss out, your next adventure awaits!
                        </div>

                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input id="email" type="text" className="md:w-9/12 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address"/>
                    
                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-black hover:text-white transition-all duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-100 rounded-lg hover:bg-gray-800 hover:scale-105 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                
                <hr className="my-6 border-gray-800 md:mt-12"/>
                
                <div className="flex items-center justify-center">
                    <div>
                        <div className="w-full mx-auto max-w-screen-xl pt-2 md:flex md:items-center md:justify-between">
                            <span className="text-sm sm:text-center text-gray-400">©2024 <a href="" className="hover:underline">TripMyWay</a>. All Rights Reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 