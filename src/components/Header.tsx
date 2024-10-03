
"use client"
import { useState, useEffect } from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./Icons";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 250) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed z-50 w-full px-4 sm:px-16 transition-colors duration-300 ${
                scrolled ? "bg-sky-800 bg-opacity-90 shadow-lg backdrop-blur-[0.5rem]" : "bg-transparent"
            }`}>

            <div className="flex justify-between items-center p-2 sm:p-2">
                {/* Logo or Header Title */}
                <h1 className="text-2xl text-white font-bold">
                    tripmyway
                </h1>

                {/* Social Icons */}
                <div className="flex gap-1 sm:gap-4">
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                </div>
            </div>
        </header>
    );
}
