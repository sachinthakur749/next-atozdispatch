"use client"

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  useEffect(() => {
    const scriptSD = document.createElement("script");
    scriptSD.async = true;
    scriptSD.src = "https://b.sf-syn.com/badge_js?sf_id=3707150&variant_id=sd";
    document
      .getElementsByTagName("script")[0]
      .parentNode.insertBefore(
        scriptSD,
        document.getElementsByTagName("script")[0]
      );

    const scriptSF = document.createElement("script");
    scriptSF.async = true;
    scriptSF.src = "https://b.sf-syn.com/badge_js?sf_id=3707150&variant_id=sf";
    document
      .getElementsByTagName("script")[0]
      .parentNode.insertBefore(
        scriptSF,
        document.getElementsByTagName("script")[0]
      );

    return () => {
      document
        .getElementsByTagName("script")[0]
        .parentNode.removeChild(scriptSD);
      document
        .getElementsByTagName("script")[0]
        .parentNode.removeChild(scriptSF);
    };
  }, []);




  return (
    <footer className="bg-[#1d1d1d] text-white">
      <div className=" px-[50px] py-10">
        <div className="flex py-4 flex-col max-md:items-center md:flex-row justify-between gap-10 border-b border-gray-700 ">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">A to Z Dispatch</h2>
            <div>
              <ul className="space-y-2 max-md:text-center">
                <li>
                  <Link href="#" className="hover:underline">
                    Contact US
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-services" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <div
                className="sf-root"
                data-id="3707150"
                data-badge="users-love-us-new-white"
                data-variant-id="sd"
                style={{
                  display: "block",
                  textAlign: "right",
                  width: "75px",
                }}
              >
                <a
                  href="https://slashdot.org/software/p/A-to-Z-Dispatch/"
                  target="_blank"
                >
                  AtoZ Dispatch Reviews
                </a>
              </div>
              <div
                style={{
                  display: "block",
                  textAlign: "left",
                }}
              >
                <a
                  href="https://reviews.financesonline.com/p/a-to-z-dispatch/"
                  target="_blank"
                >
                  <img
                    style={{
                      width: "150px",
                      height: "100px",
                      objectFit: "contain",
                      filter: "invert(1)",
                    }}
                    src="/images/rstar.png"
                    alt=""
                  />
                </a>
              </div>
              <div
                className="sf-root"
                data-id="3707150"
                data-badge="light-default"
                data-variant-id="sf"
                style={{
                  display: "block",
                  textAlign: "left",
                  width: "75px",
                }}
              >
                <a
                  href="https://sourceforge.net/software/product/A-to-Z-Dispatch/"
                  target="_blank"
                  rel="noreferrer"
                >
                  AtoZ Dispatch Reviews
                </a>
              </div>
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

          <div className="flex flex-col max-md:items-center gap-2 text-right md:text-left">
            <h3 className="font-semibold">CONTACT</h3>
            <p>support@atozdispatch.com</p>
            <p>Phone : +1 (302) 499-1612</p>
            <p>
              1111B South Governors Avenue
              <br />
              Dover, DE 19904 US
            </p>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 pt-6">
          © {getCurrentYear()} All rights reserved.{" "}
          <span className="text-orange-500">A To Z Dispatch</span>
        </div>
      </div>
    </footer>
  );
}
