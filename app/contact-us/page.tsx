"use client";

import React from "react";
import { motion } from "framer-motion";
import CustomCollapse from "@/components/CustomCollapse";
import { Metadata } from "next";



const Hero = () => {
    return (
        <div
            style={{
                backgroundImage: `url(/images/bg-contact-3.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
            }}
            className="hero"
        >
            <div className="max-width-1200px flex flex-col text-center h-full pt-[50px] justify-start items-center">
                <h1 className="font-bold text-[30px] text-white" >GET IN TOUCH WITH US</h1>
                {/* <p>GET IN TOUCH WITH US</p> */}
                <p className="subtitle text-[18px] text-white">
                    Feel free to get in touch with us through the contact methods below.
                </p>
            </div>
        </div>
    );
};

const ContactCard = () => {
    const contacts = [
        {
            title: "Sales",
            phone: "+1 ( 917 ) 259-1394",
            email: "sales@atozdispatch.com",
        },
        {
            title: "Support",
            phone: "+1 (302) 499-1612",
            email: "support@atozdispatch.com",
        },
        {
            title: "Billing",
            phone: "+1 ( 917 ) 259-1394",
            email: "billing@atozdispatch.com",
        },
    ];

    return (
        <div className="max-width-1200px contact-cards">
            {contacts.map((contact, index) => (
                <motion.div
                    key={index}
                    className="contact-card"
                    style={{ position: "relative" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "10px",
                            left: "0px",
                            background:
                                "linear-gradient(94.57deg, #c12700 3.41%, #ff4600 96.59%)",
                            color: "#fff",
                            padding: "0px 50px",
                            borderRadius: "0px 40px 40px 0px",
                        }}
                    >
                        <h2 style={{ color: "white", marginTop: "5px" }}>
                            {contact.title}
                        </h2>
                    </div>
                    <p style={{ marginTop: "100px" }} className="phone">
                        <a
                            href={`tel:${contact.phone}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            {contact.phone}
                        </a>
                    </p>
                    <button
                        onClick={() => (window.location.href = `mailto:${contact.email}`)}
                    >
                        Email {contact.title}
                    </button>
                </motion.div>
            ))}
        </div>
    );
};

const Address = () => {
    return (
        <section style={{ background: "#f5f5f5" }} className="">
            <div className=" max-width-1200px map-section">
                <div className="map">
                    <iframe
                        title="contact"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.546589409767!2d-75.5254637!3d39.139548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7634b70300001%3A0xf9dfec8064c4e95e!2s1111B%20S%20Governors%20Ave%2C%20Dover%2C%20DE%2019904%2C%20USA!5e0!3m2!1sen!2snp!4v1740042789997!5m2!1sen!2snp"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="location-info">
                    <h3>A To Z Dispatch</h3>
                    <h2>1111B South Governors Avenue Dover</h2>
                    <p>DE 19904 US</p>
                    <p style={{ marginTop: "40px" }} className="phone">
                        +1 ( 917 ) 259-1394
                    </p>
                </div>
            </div>
        </section>
    );
};

const Faq = () => {
    const textStyle = {
        color: "#666",
        textAlign: "left",
        fontWeight: 500,
        paddingLeft: "20px",
    };

    const headerStyle = {
        textAlign: "left",
        fontWeight: 500,
        fontSize: "16px",
        color: " #141414",
    };
    return (
        <section style={{ background: "#fff" }}>
            <div className="max-width-1200px contact-faq-section ">
                <div className="contact-faq-content">
                    <h2>Frequently Asked Questions</h2>
                    <h3>WHAT WOULD YOU LIKE TO KNOW?</h3>
                    <p>
                        Find answers to common questions and get the help you need. Browse
                        our FAQs for quick solutions!
                    </p>
                    <button onClick={() => (window.location.href = "/faq")}>
                        Get Your Answer
                    </button>
                </div>
                <div className="contact-faq-image">
                    <CustomCollapse textStyle={textStyle} headerStyle={headerStyle} />
                </div>
            </div>
        </section>
    );
};

const TaglineSection = () => {
    return (
        <section
            style={{ background: "#ec6408", padding: "10px 0px" }}
            className=""
        >
            <div className="cta-section max-width-1200px">
                <div className="cta-content">
                    <h2>Manage Your Business Like an Expert</h2>
                </div>
                <div>
                    <a target="_blank" href="/signup">
                        Get 30 Days Free Trial
                    </a>
                </div>
            </div>
        </section>
    );
};

const ContactUs = () => {
    return (
        <>
            <div className="contact-container">
                <Hero />
                <ContactCard />
                <Address />
                <Faq />
                <TaglineSection />
            </div>
        </>
    );
};

export default ContactUs;
