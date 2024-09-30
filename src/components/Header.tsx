import { FacebookIcon, InstagramIcon, TwitterIcon } from "./Icons";

export default function Header() {
    return (
        <header className="absoulute p-4 px-16 bg-black">
            <div className="flex justify-between">
                <div className="text-4xl font-bold">
                    TripMyWay
                </div>
                <div className="flex gap-2">
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                </div>
            </div>
        </header>
    )
}