
"use client";
import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export const Testimonials = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
        return;
        }

        setTimeout(() => {
        if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
            setCurrent(0);
            api.scrollTo(0);
        } else {
            api.scrollNext();
            setCurrent(current + 1);
        }
        }, 4000);
    }, [api, current]);

    return (
        <div className="max-w-screen-2xl mx-auto py-20 lg:py-32 bg-white rounded-lg shadow-md">
        <div className="container mx-auto">
            <div className="flex flex-col gap-10">
            <h2 className="text-2xl md:text-5xl font-bold tracking-tighter lg:max-w-xl font-regular text-left ml-20">
                Happy Travelers
            </h2>
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                {Array.from({ length: 15 }).map((_, index) => (
                    <CarouselItem className="lg:basis-1/2" key={index}>
                    <div className="bg-muted rounded-md h-full lg:col-span-2 p-8 px-12 flex justify-between flex-col">
                        <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <p className="max-w-md text-base">
                                I never knew travel could be this fun! TripMyWay crafted an amazing itinerary just for me. From the tasty food spots to thrilling adventures, every detail matched my style perfectly. I felt like a VIP everywhere I went! Plus, their support was fantastic. I could reach out anytime with questions. I canʼt wait to plan my next trip with them!
                            </p>
                        </div>
                        <p className="flex flex-row gap-2 text-sm items-center">
                            <span className="text-muted-foreground">By</span>{" "}
                            <span className="text-base">Emily Thompson</span>
                        </p>
                        </div>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
            </Carousel>
            </div>
        </div>
        </div>
    );
};
