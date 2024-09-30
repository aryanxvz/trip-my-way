
import React from "react"

export function Features() {
    return (
        <div className="w-full py-20">
            <h1 className="text-4xl font-bold flex justify-center items-center p-12">
                why choose us?
            </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-6 max-w-7xl mx-auto">
            {grid.map((feature) => (
            <div key={feature.title}
                className="relative border border-gray-200 bg-gradient-to-b dark:from-neutral-700 from-gray-50 dark:to-neutral-950 to-white p-6 rounded-3xl shadow-sm hover:shadow-md hover:scale-105 transition-all">
                <p className="text-base md:text-xl font-bold text-neutral-800 dark:text-white relative z-20">
                    {feature.title}
                </p>
                <p className="text-neutral-700 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
                    {feature.description}
                </p>
            </div>
            ))}
        </div>
        </div>
    )
}

const grid = [
    {
        title: "Personal Touch",
        description:
        "We listen to you! Your interests shape every detail of your unique travel experience.",
    },
    {
        title: "Expert Insights",
        description:
        "Our team knows travel! We provide tips and tricks for a smooth and enjoyable journey every time.",
    },
    {
        title: "Flexible Options",
        description:
        "Plans that adapt! Customize your itinerary to fit your schedule, preferences, and group size.",
    },
    {
        title: "24/7 Support",
        description:
        "Weʼre here for you! Get help anytime during your trip for a stress-free travel experience.",
    }
]
