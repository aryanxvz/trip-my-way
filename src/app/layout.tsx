import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Trip my way",
    description: "Your dream trip taolored just for you",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased bg-gray-50`}>

                <Header />
                {children}

            </body>
        </html>
    );
}
