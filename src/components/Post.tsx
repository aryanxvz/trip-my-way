
export const Post = () => (
    <div className="max-w-screen-2xl mx-auto py-20 lg:py-40 shadow-md rounded-lg bg-white">
        <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
            <div className="flex gap-4 flex-col flex-1">
            <div className="flex gap-2 flex-col pl-4">
                <h2 className="text-xl md:text-4xl tracking-tighter lg:max-w-xl font-semibold text-left py-2 ">
                    Crafting Personalized Journeys for Unforgettable Adventures.
                </h2>
                <p className="text-lg max-w-xl leading-relaxed tracking-tight text-left p-2">
                    At  <strong>TripMyWay</strong>, we believe in creating unforgettable journeys tailored just for you. Our values are rooted in passion, creativity, and personalization. We strive to understand your unique travel style, ensuring every adventure reflects your dreams. Your happiness is our mission, and we’re dedicated to making travel effortless and exciting!
                </p>
            </div>
            </div>
            <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
                <img className="rounded-md" src="/hero2.png" alt="" />
            </div>
        </div>
        </div>
    </div>
);