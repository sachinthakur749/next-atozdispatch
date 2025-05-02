
import React from "react";
import Image from "next/image";
import { pricingPlanData } from "@/lib/PricingPlanData";


const SubscriptionPlan = () => {
    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Products</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                    White-label Dispatch System: Purchase includes the option to change the logo on the application to align with your brand identity.
                    Payment Gateway Flexibility, Location Services & White-label System. <br />
                    <span className="text-sm italic">
                        Note: The package does not include custom requirements such as content, images, or additional features.
                    </span>
                </p>

                {/* <div className="mb-12">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition">
                        ▶ Watch Demo
                    </button>
                </div> */}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {pricingPlanData.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white p-8  shadow-md flex flex-col justify-between border ${plan.title === "STANDARD" ? "border-orange-500" : "border-gray-200"
                                }`}
                        >
                            {plan.title === "STANDARD" && (
                                <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                                    POPULAR
                                </span>
                            )}
                            <div>
                                <div className="flex justify-center mb-4">
                                    <Image
                                        src={plan.image}
                                        alt={`${plan.title} Plan`}
                                        width={180}
                                        height={100}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                                <p className="text-3xl font-bold text-orange-500 mb-4">
                                    {plan.price}
                                    <span className="text-base text-gray-600 font-normal">/MONTH</span>
                                </p>
                                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold mb-6 transition">
                                    SIGN UP FOR FREE TRIAL
                                </button>
                                <ul className="text-gray-700 text-left space-y-2 text-sm">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-green-500 font-bold">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SubscriptionPlan;
