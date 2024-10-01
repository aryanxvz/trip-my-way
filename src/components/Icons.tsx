
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs"

export const InstagramIcon = () => {
    return (
        <a href="https://www.instagram.com/" target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-white active:scale-105 transition cursor-pointer text-white/90">
            <BsInstagram className="w-5 h-5" />
        </a>
    )
}

export const FacebookIcon = () => {
    return (
        <a href="https://www.facebook.com/" target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-white active:scale-105 transition cursor-pointer text-white/90">
            <BsFacebook className="w-5 h-5" />
        </a>
    )
}

export const TwitterIcon = () => {
    return (
        <a href="https://twitter.com/" target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-white active:scale-105 transition cursor-pointer text-white/90">
            <BsTwitterX className="w-5 h-5" />
        </a>
    )
}