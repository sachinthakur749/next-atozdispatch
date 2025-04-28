import { Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <div className="flex space-y-2 flex-col  items-center justify-between bg-[#ec6408] px-6 py-10  w-full">

            <div className="text-center flex flex-col items-center ">
                <h1 className="text-white text-3xl w-max  font-bold leading-tight  uppercase">
                    Limo & Chauffeur <span className='text-black'> Dispatch System</span>
                </h1>
                <h2 className="text-white text-3xl w-max  font-bold leading-tight  uppercase">
                    Upgrade Your Limo Business
                </h2>
            </div>

            <div className="mt-10 md:mt-0">
                <Image
                    alt="banner"
                    src="/images/banner.png"
                    width={800}
                    height={400}
                    className="object-contain"
                />
            </div>

            <div>
                <Link href={"/signup"} className="flex items-center bg-[#008000] font-semibold mt-4 text-white px-[30px] py-[10px]  transition">
                    <Lightbulb className="mr-2" />
                    signup for free trial
                </Link>
            </div>

        </div>
    );
};

export default HeroSection;
