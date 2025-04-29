import { CirclePlay } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Globe } from 'lucide-react';
import Link from 'next/link';


const FeaturesSection = () => {
    const servicesData = [
        {
            num: "1.",
            title: "Web Booker System",
            image: "/images/dispatch-app.jpg",
            description:
                "Your control center, allowing you to manage bookings, drivers, and passengers all in one place. Operator receives the booking, confirms the booking, and assigns the booking to driver.",
            link: "/videos/ATOZ_DISPATCH_SYSTEM2.mp4",
        },
        {
            num: "2.",
            title: "Passenger App",
            image: "/images/passenger-app.jpg",
            description:
                "Passenger can make booking from app, web or call operator to make a booking.",
            link: "/videos/ATOZ_DISPATCH_SYSTEM1.mp4",
        },
        {
            num: "3.",
            title: "Driver App",
            image: "/images/driver-app.jpg",
            description:
                "Empowering your drivers with real-time job notifications and seamless job management. Driver can accept or reject the job.",
            link: "/videos/ATOZ_DRIVER.mp4",
        },
    ];

    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Our Dispatch System Includes
                </h2>

                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="grid md:grid-cols-2 gap-12 items-center mb-20"
                    >
                        <div
                            className={`flex justify-center ${index % 2 !== 0 ? 'md:order-2' : ''}`}
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={500}
                                height={300}
                                className="object-contain"
                            />
                        </div>

                        <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                            <div className='relative'>
                                <h4 className="text-[30px] font-semibold mb-4 uppercase">{service.title}</h4>
                                <h3 className="absolute left-[10px] text-[#003273] top-[-40px]  text-[74px]  leading-[78px] opacity-70  font-bold  mb-2">{service.num.replace('.', '')}.</h3>
                            </div>
                            <p className="text-gray-700 mb-6">{service.description}</p>

                            <div className="flex items-center gap-4 mb-4">
                                <a href={service.link} target="_blank" rel="noopener noreferrer">
                                    <button className="flex gap-2 rounded-[25px] items-center bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 text-sm">
                                        <CirclePlay className='text-white' /> Watch Video
                                    </button>
                                </a>
                            </div>


                            {(service.title === "Passenger App" || service.title === "Driver App") ? (
                                <div className="flex gap-2">
                                    <Link target="_blank" href="https://apps.apple.com/us/app/a-to-z-dispatch/id6639615450" >
                                        <Image
                                            src="/images/app_store.webp"
                                            alt="App Store"
                                            width={120}
                                            height={40}
                                        />
                                    </Link>
                                    <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.a2z.dispatch" >
                                        <Image
                                            src="/images/google_play.png"
                                            alt="Google Play"
                                            width={120}
                                            height={40}
                                        />
                                    </Link>
                                </div>
                            ) : (
                                <Link target='_blank' href="https://yourcompany.atozdispatch.com/" className='bg-black flex items-center gap-1 text-white w-max px-5 py-2 rounded-sm ' >
                                    <Globe />  Web Version
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
