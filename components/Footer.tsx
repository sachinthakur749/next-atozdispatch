'use client';

import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import { IoMdStar } from 'react-icons/io';
import { FaPinterestP } from 'react-icons/fa6';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#1d1d1d] text-white">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-700 ">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">A to Z Dispatch</h2>
                        <div>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">Contact US</a></li>
                                <li><a href="#" className="hover:underline">Blog</a></li>
                                <li><a href="#" className="hover:underline">FAQs</a></li>
                                <li><a href="#" className="hover:underline">FAQs</a></li>
                                <li><a href="#" className="hover:underline">FAQs</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Center Column */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex gap-4">
                            <Image src="/users-love-us-badge.png" alt="Users Love Us" width={70} height={70} />
                            <Image src="/rising-star-badge.png" alt="Rising Star" width={70} height={70} />
                            <Image src="/sourceforge-badge.png" alt="Sourceforge" width={70} height={70} />
                        </div>
                        <div className="flex gap-5 text-2xl mt-4">
                            <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
                            <FaTwitter className="hover:text-gray-400 cursor-pointer" />
                            <FaYoutube className="hover:text-gray-400 cursor-pointer" />
                            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
                            <FaTiktok className="hover:text-gray-400 cursor-pointer" />
                            <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
                            <FaPinterestP className="hover:text-gray-400 cursor-pointer" />
                            <IoMdStar className="hover:text-gray-400 cursor-pointer" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 text-right md:text-left">
                        <h3 className="font-semibold">CONTACT</h3>
                        <p>support@atozdispatch.com</p>
                        <p>Phone : +1 (302) 499-1612</p>
                        <p>1111B South Governors Avenue<br />Dover, DE 19904 US</p>
                    </div>
                </div>

                <div className="text-center text-sm text-gray-400 pt-6">
                    © 2025 All rights reserved. <span className="text-orange-500">A To Z Dispatch</span>
                </div>
            </div>
        </footer>
    );
}
