"use client";

import React, { useState } from 'react'
import NewsletterFormModal from './NewsletterFormModal';

const Newsletter = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className=" bg-[#ffe7e1] px-[20px] py-[50px] flex gap-4 items-start flex-col md:flex-row md:justify-between " >
                <div>
                    <p className=" text-[#261f2d] uppercase m-0 text-[30px] font-[600] ">Subscribe To Our Newsletter</p>
                    <p className="sub-title">
                        Get notified about Our Products, New Feature & more
                    </p>
                </div>
                <button
                    style={{
                        background: "#24AD7A",
                        paddingRight: "20px",
                        paddingLeft: "20px",
                        border: "none",
                    }}
                    onClick={() => setOpen(true)}
                    className="header-outlined-btn"
                >
                    Subscribe
                </button>
                {/* <button onClick={() => setOpen(true)}>Subscribe</button> */}
            </div>{" "}
            <NewsletterFormModal open={open} handleClose={() => setOpen(false)} />
        </>
    )
}

export default Newsletter