"use client";

import { useState } from 'react'
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';
import Tab4 from './tabs/Tab4';
import Tab5 from './tabs/Tab5';
import Tab6 from './tabs/Tab6';
import Tab7 from './tabs/Tab7';
import Tab8 from './tabs/Tab8';
import Tab9 from './tabs/Tab9';

const page = () => {
    const [active, setActive] = useState("introduction");
    const tabs = [
        { id: "introduction", label: "Introduction" },
        { id: "general-questions", label: "General Questions" },
        { id: "features-functionality", label: "Features and Functionality" },
        {
            id: "implementation-integration",
            label: "Implementation and Integration",
        },
        { id: "pricing-licensing", label: "Pricing and Licensing" },
        { id: "cancellation", label: "Cancellation Policy" },
        { id: "security-compliance", label: "Security and Compliance" },
        { id: "support-maintenance", label: "Support and Maintenance" },
        { id: "addons-extra-features", label: "Add-Ons and Extra Features" },
    ];

    return (
        <div className='max-w-7xl mx-auto'>
            <div className="faq-container">
                <div className="hero-faq">
                    <div className="text-ctn">
                        <h3>FAQs</h3>
                        <p>
                            Have questions about our plans and billing? Explore all the
                            details here.
                        </p>
                    </div>
                    <div className="img-ctn">
                        <img src="/images/faq-img2.png" alt="fag-image" />
                    </div>
                </div>
                <div className="faq-content">
                    <div className="left">
                        <div>
                            {tabs?.map((item, ind) => (
                                <div
                                    onClick={() => setActive(item?.id)}
                                    key={ind}
                                    className={`item-label ${active === item?.id ? "selected-label" : ""
                                        } `}
                                >
                                    <p>{item?.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="right">
                        {active === "introduction" && <Tab1 />}
                        {active === "general-questions" && <Tab2 />}
                        {active === "features-functionality" && <Tab3 />}
                        {active === "implementation-integration" && <Tab4 />}
                        {active === "pricing-licensing" && <Tab5 />}
                        {active === "cancellation" && <Tab9 />}
                        {active === "security-compliance" && <Tab6 />}
                        {active === "support-maintenance" && <Tab7 />}
                        {active === "addons-extra-features" && <Tab8 />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page