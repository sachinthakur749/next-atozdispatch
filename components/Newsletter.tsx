"use client";

import React, { useState } from 'react'
import NewsletterFormModal from './NewsletterFormModal';

const Newsletter = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="newsletter-ctn">
                <div>
                    <p className="title">Subscribe To Our Newsletter</p>
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