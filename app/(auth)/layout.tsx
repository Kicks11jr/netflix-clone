import Image from "next/image";
import { ReactNode } from "react";

import BackgroundImage from '../../public/login_background.jpg';
import Logo from '../../public/logo_kicksflix.png'

export default function AuthLayout({children}: {children: ReactNode}) {
    return (
        <div className="
            relative
            flex
            h-screen
            w-screen
            flex-col
            bg-black
            md:items-center
            md:justify-center
            md:bg-transparent
        ">
            
            {/* BG Login - SignUp Page */}
            <Image 
                src={BackgroundImage}
                alt="background image"
                priority
                className="
                    hidden
                    sm:flex
                    sm:object-cover
                    -z-10
                    brightness-50
                "
                fill
            />

            {/* Logo */}
            <Image
                src={Logo}
                alt="Logo"
                width={170}
                height={170}
                priority
                className="
                    absolute
                    left-4
                    top-4
                    object-contain
                    md:left-10
                    md:top-6
                "
                />
            {children}
        </div>
    );
}