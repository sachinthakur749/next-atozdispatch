import { Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center justify-between bg-[#ec6408] px-4 md:px-6 py-10 w-full space-y-8">

            <div className="text-center max-w-2xl">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight uppercase">
                    Limo & Chauffeur <span className="text-black">Dispatch System</span>
                </h1>
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight uppercase mt-2">
                    Upgrade Your Limo Business
                </h2>
            </div>

            <div className="w-full flex justify-center">
                <Image
                    alt="banner"
                    src="/images/banner.png"
                    width={800}
                    height={400}
                    className="object-contain max-w-full h-auto"
                />
            </div>

            <div>
                <Link href="/signup" className="flex items-center bg-green-700 hover:bg-green-800 font-semibold text-white px-6 py-3 rounded transition">
                    <Lightbulb className="mr-2" />
                    Sign Up for Free Trial
                </Link>
            </div>

        </div>
    );
};

export default HeroSection;
