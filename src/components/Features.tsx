
export const Features = () => (
    <div className="w-full py-20 lg:py-40">
        <div className="container mx-auto flex flex-col gap-12">

            <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
                <h4 className="text-5xl font-bold tracking-tighter max-w-xl font-regular">
                Why Choose Us?
                </h4>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="flex flex-col gap-2 hover:scale-105 transition">
                    <div className="bg-muted rounded-md aspect-video mb-4 shadow-md hover:shadow-lg transition">
                        <img src="/personal-touch.png" alt="personal touch" className="w-full h-full object-cover rounded-md"/>
                    </div>
                        <h3 className="text-xl tracking-tight">Personal Touch</h3>
                        <p className="text-muted-foreground text-base">
                            We listen to you! Your interests shape every detail of your unique travel experience.
                        </p>
                </div>

                <div className="flex flex-col gap-2 hover:scale-110 transition">
                    <div className="bg-muted rounded-md aspect-video mb-4 shadow-md hover:shadow-lg transition">
                        <img src="/flexible-planning.png" alt="personal touch" className="w-full h-full object-cover rounded-md"/>
                    </div>
                        <h3 className="text-xl tracking-tight">Flexible Options</h3>
                        <p className="text-muted-foreground text-base">
                            Plans that adapt! Customize your itinerary to fit your schedule, preferences, and group size.
                        </p>
                </div>

                <div className="flex flex-col gap-2 hover:scale-110 transition">
                    <div className="bg-muted rounded-md aspect-video mb-4 shadow-md hover:shadow-lg transition">
                        <img src="/expert-insights.png" alt="personal touch" className="w-full h-full object-cover rounded-md"/>
                    </div>
                        <h3 className="text-xl tracking-tight">Expert Insights</h3>
                        <p className="text-muted-foreground text-base">
                            Our team knows travel! We provide tips and tricks for a smooth and enjoyable journey every time.
                        </p>
                </div>

                <div className="flex flex-col gap-2 hover:scale-110 transition">
                    <div className="bg-muted rounded-md aspect-video mb-4 shadow-md hover:shadow-lg transition">
                        <img src="/allday-support.png" alt="personal touch" className="w-full h-full object-cover rounded-md"/>
                    </div>
                        <h3 className="text-xl tracking-tight">24/7 Support</h3>
                        <p className="text-muted-foreground text-base">
                            Weʼre here for you! Get help anytime during your trip for a stress-free travel experience.
                        </p>
                </div>

            </div>
        </div>
    </div>
) 