
export default function Cards() {
    return (
        <div className="w-full py-20">
            <div className="flex justify-center">
                <h1 className="text-4xl font-bold flex justify-center items-center p-12">
                    Our Itineraries
                </h1>
            </div>

            <div className="flex justify-evenly">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
                    <img className="rounded-t-lg" src="/adventure.jpg" alt="" />
                    <div className="p-5">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Adventure Plans</h2>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Unleash your inner explorer with custom plans for thrilling outdoor adventures and unforgettable experiences!</p>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src="/dinner.png" alt="" />
                    <div className="p-5">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Foodie Journeys</h2>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Savor every bite! Enjoy personalized food tours featuring local cuisine and hidden culinary gems just for you!</p>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src="/family.jpg" alt="" />
                    <div className="p-5">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Family Fun</h2>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Create lasting memories with tailored trips packed with fun activities for the whole family to enjoy together!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}