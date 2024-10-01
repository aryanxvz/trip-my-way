import Cards from "@/components/Cards";
import { Features } from "@/components/Features";
import HeroPage from "@/components/Hero";
import { Post } from "@/components/Post";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
    return (
        <main>
            <HeroPage />
            <Cards />
            <Post />
            <Features />
            <Testimonials />
        </main>
    );
}
