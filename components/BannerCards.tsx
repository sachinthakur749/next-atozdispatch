import { FaMapMarkerAlt, FaDesktop, FaMobileAlt } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { MdDevices } from "react-icons/md";

const services = [
    { icon: <FaMapMarkerAlt size={40} className="text-orange-500" />, title: "Dispatch\nSystem" },
    { icon: <FaDesktop size={40} className="text-orange-500" />, title: "Web Booker" },
    { icon: <BiCodeAlt size={40} className="text-orange-500" />, title: "Booking\nWizard" },
    { icon: <FaMobileAlt size={40} className="text-orange-500" />, title: "Branded Driver\nApp" },
    { icon: <MdDevices size={40} className="text-orange-500" />, title: "Branded Passenger\nApp" },
];

export default function BannerCards() {
    return (
        <div className="py-8 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        style={{ boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.2)" }}
                        className="bg-white shadow-md  p-[50px] flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                    >
                        {service.icon}
                        <h3 className="mt-4 text-md font-semibold text-gray-800 whitespace-pre-line">
                            {service.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
