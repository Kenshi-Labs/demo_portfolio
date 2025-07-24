"use client";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0d2824] text-white px-4 sm:px-6 pb-4 sm:pb-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden top-16 sm:top-20 md:top-24">
        <Image
          src="/assets/corp.png"
          alt="Footer Background"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Footer Grid Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-10 gap-4 sm:gap-6 lg:gap-10 max-w-[1450px] mx-auto">
        {/* Column 1: Logo & Socials - Mobile: full width, Tablet: 2 cols, Desktop: 4 cols */}
        <div className="lg:col-span-4 bg-white/15 backdrop-blur-sm border border-white/10 rounded-tl-[40px] sm:rounded-tl-[60px] lg:rounded-tl-[80px] rounded-tr-xl rounded-b-xl p-4 sm:p-6 flex flex-col sm:flex-row overflow-hidden">
          {/* Logo & Text Section */}
          <div className="flex-1 sm:pr-6 mb-4 sm:mb-0">
            <div className="flex justify-center sm:justify-start mb-3 sm:mb-0">
              <Image
                src="/assets/brma.png"
                alt="BRMA Logo"
                width={80}
                height={80}
                className="sm:w-[100px] sm:h-[100px]"
              />
            </div>
            <p className="text-xs sm:text-sm text-[#FFFFFF] leading-relaxed mt-2 sm:mt-4 font-poppins text-center sm:text-left">
              Bengal Rice Mills Association (BRMA) empowers West Bengal&#39;s
              rice millers with expert guidance, innovative solutions, and a
              strong network.
            </p>
          </div>

          {/* Social Icons Section */}
          <div className="sm:pl-6 sm:border-l border-white/20 flex sm:flex-col justify-center items-center gap-3 sm:gap-4 text-[#FFFFFF]">
            <Icon
              icon="mdi:twitter"
              className="text-lg sm:text-xl cursor-pointer hover:text-[#FAC819] transition-colors"
            />
            <Icon
              icon="mdi:instagram"
              className="text-lg sm:text-xl cursor-pointer hover:text-[#FAC819] transition-colors"
            />
            <Icon
              icon="mdi:linkedin"
              className="text-lg sm:text-xl cursor-pointer hover:text-[#FAC819] transition-colors"
            />
          </div>
        </div>

        {/* Column 2: Quick Links - Mobile: full width, Desktop: 2 cols */}
        <div className="lg:col-span-2 bg-white/15 backdrop-blur-sm border border-white/10 rounded-xl px-4 sm:px-6 py-6 sm:py-8 font-poppins">
          <h3 className="text-base sm:text-lg font-semibold text-[#FFFFFF] mb-4 sm:mb-6 text-center">
            Quick Links
          </h3>
          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-[#FFFFFF] text-center">
            <li className="cursor-pointer hover:text-[#FAC819] transition-colors">
              Home
            </li>
            <li className="cursor-pointer hover:text-[#FAC819] transition-colors">
              About Us
            </li>
            <li className="cursor-pointer hover:text-[#FAC819] transition-colors">
              Problems
            </li>
            <li className="cursor-pointer hover:text-[#FAC819] transition-colors">
              Solutions
            </li>
            <li className="cursor-pointer hover:text-[#FAC819] transition-colors">
              News
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info - Mobile: full width, Desktop: 4 cols */}
        <div className="lg:col-span-4 bg-white/15 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 lg:p-10 text-xs sm:text-sm text-gray-300 space-y-8 sm:space-y-12 lg:space-y-20 font-poppins">
          {/* Registered Office */}
          <div>
            <h4 className="font-semibold text-[#FFFFFF] mb-2 sm:mb-1 flex items-start sm:items-center gap-2 text-sm sm:text-base">
              <Icon
                icon="mdi:map-marker"
                className="text-[#FAC819] mt-1 sm:mt-0 flex-shrink-0"
              />
              <span>Registered Office</span>
            </h4>
            <p className="text-[#FFFFFF] opacity-70 ml-6 sm:ml-5 leading-relaxed">
              4525 Saints Alley, Plant City, FL 33564
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#FFFFFF] mb-2 sm:mb-1 flex items-center gap-2 text-sm sm:text-base">
              <Icon icon="mdi:phone" className="text-[#FAC819] flex-shrink-0" />
              <span>Contact Us</span>
            </h4>
            <p className="text-[#FFFFFF] opacity-70 ml-6 sm:ml-5">
              (256) 289-9707
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative bg-white/15 backdrop-blur-sm z-10 mt-6 sm:mt-8 lg:mt-10 p-4 sm:p-6 rounded-xl flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs max-w-[1450px] mx-auto text-[#FFFFFF] font-poppins gap-2 sm:gap-0">
        <p className="text-center sm:text-left">
          © ALL RIGHTS RESERVED 2025 | BRMA
        </p>
        <p className="text-center sm:text-right">DEVELOPED BY KENSHI LABS</p>
      </div>
    </footer>
  );
};

export default Footer;
