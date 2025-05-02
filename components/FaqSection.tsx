import React from 'react'
import CustomCollapse from './CustomCollapse'
import Link from 'next/link';

const FaqSection = () => {
    const textStyle = {
        color: "#fff",
        textAlign: "left",
        fontWeight: 500,
        paddingLeft: "20px",
    };

    const headerStyle = {
        color: "#fff",
        textAlign: "left",
        fontWeight: 500,
        fontSize: "16px",
    };
    return (
        <div className="bg-[#1a1a1a] text-white py-12 px-6 md:px-16 flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="md:w-1/2">
                <p className="text-orange-500 font-semibold mb-2">Support</p>
                <h2 className="text-4xl font-bold mb-4">FAQs</h2>
                <p className="text-lg text-gray-300 mb-4 max-w-md">
                    Everything you need to know about the plans and billing. Can’t find the answer you’re looking for?
                </p>
                {/* <p className="text-white font-medium">Please <span className="underline cursor-pointer text-orange-500 hover:text-orange-400">Contact Us</span></p> */}
            </div>

            <div className="md:w-1/2">
                <CustomCollapse textStyle={textStyle} headerStyle={headerStyle} />
                <div className='mt-8'>
                    <Link href="/faq" className='bg-[#ec6408] px-[20px] ml-4  py-[12px]' >View More</Link>
                </div>
            </div>
        </div>
    )
}

export default FaqSection
