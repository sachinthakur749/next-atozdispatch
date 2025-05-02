import Image from "next/image";
import Link from "next/link";

const clients = [
    { name: "Afutata", src: "/images/afutata.png" },
    { name: "FCC", src: "/images/fcc.png" },
    { name: "BlackCityDriver", src: "/images/bcd.png" },
    { name: "EZ MUV", src: "/images/ezmuv.png" },
    { name: "OnRoutz", src: "/images/onroutz.png" },
    { name: "rbc", src: "/images/rbc.png" },
    { name: "Az Transfer", src: "/images/az_transfer.jpeg" },
    { name: "Trident Taxis", src: "/images/trident_taxi.png" },
    { name: "USA Luxury", src: "/images/usa_luxury.jpeg" },
];

export default function ClientsSection() {
    return (
        <section className="py-12 px-4">
            <div className="max-w-7xl bg-blue-50  border-1 border-[#ccdaf9]  mx-auto text-center">
                <div className="p-4">
                    <h2 className="text-3xl  font-bold mb-4">
                        All in One Highly Trusted Robust Cloud Limo & Chauffeur Dispatch System
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        We provide you all in one cloud Limo & Chauffeur Dispatch system with all the technical resources
                        required from start to finish to run your application. Our Dispatch system allows you
                        to track your drivers and monitor the jobs and payment activity in real-time.
                    </p>

                    <h3 className="text-2xl font-semibold mb-6">Our Recent Clients</h3>

                    <div className="grid  grid-cols-2 md:grid-cols-9  gap-4 items-center justify-center mb-10">
                        {clients.map((client, index) => (
                            <div key={index} className=" rounded-lg  flex justify-center items-center">
                                <Image
                                    src={client.src}
                                    alt={client.name}
                                    width={70}
                                    height={70}
                                    className="object-contain rounded-[5px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="text-[#ccdaf9]" />


                <div className="flex flex-col p-4 items-center gap-2">
                    <Link target="_blank" href="https://www.trustpilot.com/review/atozdispatch.com">
                        <Image
                            src="/images/trust.png"
                            alt="Trustpilot"
                            width={150}
                            height={40}
                            className="object-contain"
                        />
                    </Link>
                </div>
            </div>
            <div className="flex w-[100%] md:w-[50%] m-auto justify-center items-center mt-10">
                <video width="100%" className="video-frame" controls={true}>
                    <source src="/videos/ATOZ_DISPATCH_SYSTEM.mp4" type="video/mp4" />
                    Your browser does not support HTML video.
                </video>
            </div>
        </section>
    );
}
