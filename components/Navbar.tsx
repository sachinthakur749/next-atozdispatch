import { Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="sticky top-0 left-0 right-0 z-[99] border-[1px] border-[#eeeeee] bg-white/70 backdrop-blur-sm py-2">
            <div className="mx-auto max-w-7xl px-4 sm:px-6  flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/">
                        <Image alt="logo" src="/images/logo.png" width={130} height={40} />
                    </Link>
                </div>

                <div className="flex items-center space-x-3">
                    <Link
                        href="#requestDemoSection"
                        className=" hidden md:flex items-center bg-[#329b74] text-white px-4 py-2 text-sm sm:text-base transition"
                    >
                        <Lightbulb className="mr-2" size={18} />
                        Request Demo
                    </Link>
                    <Link
                        href="/signup"
                        className="px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-100 transition text-sm sm:text-base"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
