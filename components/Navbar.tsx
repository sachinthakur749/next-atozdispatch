import { Lightbulb } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex max-w-[92%] m-auto items-center justify-between px-6 py-2 ">
            <div className="flex items-center space-x-2">
                <Image alt='logo' src="/images/logo.png" width={100} height={10} />
            </div>

            <div className="flex items-center space-x-4">
                <button className="flex items-center bg-[#329b74] text-white px-[30px] py-[10px]  transition">
                    <Lightbulb className="mr-2" />
                    Request Demo
                </button>
                <button className="px-4 py-2 border border-orange-500 text-orange-500  hover:bg-orange-100 transition">
                    Sign up
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
