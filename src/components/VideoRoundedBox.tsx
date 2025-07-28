"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

export default function FullScreenImageVideo() {
  return (
    <section className="relative w-full min-h-screen bg-[#0d2824] overflow-hidden">
      <div className="relative w-full max-w-[1450px] mx-auto min-h-screen">
        {/* Logo - Fixed mobile positioning */}
        <div className="absolute top-4 left-4 sm:top-4 sm:left-6 lg:top-2 lg:left-8 xl:top-0 xl:left-[121px] 2xl:top-0 2xl:left-[48px] z-30">
          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-22 xl:h-22 2xl:w-24 2xl:h-24 flex items-center justify-center overflow-hidden rounded-full relative">
            <Image
              src="/assets/brma.png"
              alt="BRMA Logo"
              fill
              sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, (max-width: 1280px) 80px, 96px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Header Navigation - Fixed mobile layout */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-4 lg:right-8 xl:top-2 xl:right-9 2xl:top-2 2xl:right-4 z-30 flex items-center gap-2 sm:gap-3 lg:gap-1">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="bg-[#23433E] rounded-full p-2 sm:p-3 shadow-lg">
              <Icon
                icon="mdi:menu"
                className="text-white text-xl sm:text-2xl"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex bg-[#23433E] rounded-[24px] xl:rounded-[28px] 2xl:rounded-[32px] px-2 xl:px-2 2xl:px-1.5 py-2 xl:py-2 2xl:py-1 shadow-lg items-center font-manrope">
            <nav className="flex items-center gap-1 xl:gap-1 2xl:gap-1 text-white text-sm xl:text-sm 2xl:text-[12px] font-medium">
              <Link
                href="#"
                className="flex items-center gap-1 xl:gap-2 px-3 xl:px-2 2xl:px-2.5 py-1 xl:py-1 2xl:py-2 bg-[#C29144] text-black font-semibold rounded-full "
              >
                <Icon
                  icon="mdi:home-outline"
                  className="text-base xl:text-base 2xl:text-xl"
                />
                Home
              </Link>
              <Link
                href="#"
                className="hover:text-yellow-400 transition px-2 xl:px-2 2xl:px-2 py-1 xl:py-1 2xl:py-1 rounded-full"
              >
                About
              </Link>
              <div className="relative group">
                <button className="flex items-center gap-1 xl:gap-2 hover:text-yellow-400 transition px-3 xl:px-2 2xl:px-5 py-1.5 xl:py-1 2xl:py-3 rounded-full">
                  Resources
                  <Icon
                    icon="mdi:chevron-down"
                    className="text-lg xl:text-lg 2xl:text-2xl"
                  />
                </button>
              </div>
              <Link
                href="#"
                className="hover:text-yellow-400 transition px-2 xl:px-2 2xl:px-2 py-1 xl:py-1 2xl:py-1 rounded-full"
              >
                Membership
              </Link>
              <Link
                href="#"
                className="hover:text-yellow-400 transition px-2 xl:px-2 2xl:px-2 py-1 xl:py-1 2xl:py-1 rounded-full"
              >
                Grievance
              </Link>
            </nav>
          </div>

          {/* User Profile Box - Fixed mobile sizing */}
          <div className="flex rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] xl:rounded-[28px] 2xl:rounded-[32px] overflow-hidden shadow-md h-10 sm:h-12 lg:h-12 xl:h-11 2xl:h-14 font-manrope">
            <div className="bg-[#23433E] px-2 pr-2 sm:pr-3 xl:px-2 xl:pr-2 2xl:px-3 2xl:pr-3 flex items-center gap-1 xl:gap-1 2xl:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-8 lg:h-8 xl:w-10 xl:h-9 2xl:w-10 2xl:h-10 relative rounded-full border border-white overflow-hidden">
                <Image
                  src="/assets/user.jpg"
                  alt="Profile"
                  fill
                  sizes="(max-width: 640px) 24px, (max-width: 1024px) 32px, (max-width: 1280px) 40px, 40px"
                  className="object-cover"
                />
              </div>
              <span className="text-white text-xs sm:text-sm lg:text-sm xl:text-xs 2xl:text-[12px] font-medium whitespace-nowrap hidden sm:block">
                Nayanika
              </span>
            </div>
            <div className="bg-[#21574F] px-2 sm:px-3 xl:px-3 2xl:px-3 flex items-center justify-center">
              <Icon
                icon="mdi:logout"
                className="text-white text-base sm:text-lg xl:text-base 2xl:text-2xl cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Video Container - Fixed mobile video display */}
        <div className="w-full min-h-screen relative">
          {/* Masked Video Container - Only for screens above xl */}
          <div
            className="hidden xl:block w-full min-h-screen absolute inset-1"
            style={{
              WebkitMaskImage: "url('/assets/banner.png')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              maskImage: "url('/assets/banner.png')",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
            }}
          >
            <video
              className="w-full h-full min-h-screen object-cover"
              src="/assets/banner_video.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Regular Video Container - For mobile and tablet */}
          <div className="xl:hidden w-full min-h-screen absolute inset-0">
            <video
              className="w-full h-full min-h-screen object-cover"
              src="/assets/banner_video.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Main Content - Fixed mobile positioning and text sizing */}
          <div className="absolute top-[25%] sm:top-[30%] lg:top-[32%] xl:top-[32%] 2xl:top-[28%] left-4 sm:left-6 lg:left-8 xl:left-[12%] 2xl:left-[12%] z-30 max-w-[85%] sm:max-w-[80%] lg:max-w-[70%] xl:max-w-[55%] 2xl:max-w-[700px] text-white flex items-start gap-2 sm:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
            {/* Decorative dots - Hidden on mobile, visible from sm up */}
            <div className="hidden sm:flex flex-col items-center mt-6 sm:mt-8 lg:mt-12 xl:mt-16 2xl:mt-14">
              <span className="w-1.5 xl:w-2 2xl:w-3 h-6 sm:h-8 lg:h-12 xl:h-20 2xl:h-24 rounded-full bg-[#F2C744] mb-2 xl:mb-3 2xl:mb-4" />
              <span className="w-1.5 xl:w-2 2xl:w-3 h-2 sm:h-3 lg:h-4 xl:h-5 2xl:h-6 rounded-full bg-[#F2C744] mb-2 xl:mb-3 2xl:mb-4" />
              <span className="w-1.5 xl:w-2 2xl:w-3 h-2 sm:h-3 lg:h-4 xl:h-5 2xl:h-6 rounded-full bg-[#F2C744]" />
            </div>

            <div className="flex-1">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8 font-elmessiri">
                <span className="block lg:hidden">
                  Developing the Next Phase of Rice Milling and Shaping the
                  Future of Feeding
                </span>
                <span className="hidden lg:block">
                  Developing the Next Phase of <br />
                  Rice Milling and Shaping the <br />
                  Future of Feeding
                </span>
              </h1>
              <p className="text-xs sm:text-sm lg:text-sm xl:text-base 2xl:text-lg text-gray-200 mb-4 sm:mb-6 lg:mb-6 xl:mb-8 2xl:mb-10 font-poppins leading-relaxed">
                <span className="block lg:hidden">
                  BRMA leads the rice milling industry, driving growth with
                  innovation and sustainability.
                </span>
                <span className="hidden lg:block">
                  BRMA leads the rice milling industry, driving industry growth{" "}
                  <br />
                  with innovation, sustainability, and community support.
                </span>
              </p>
              <button className="border border-white rounded-full px-4 py-2 sm:px-5 sm:py-3 lg:px-6 lg:py-3 xl:px-7 xl:py-4 2xl:px-6 2xl:py-3 text-xs sm:text-sm lg:text-sm xl:text-base 2xl:text-lg hover:bg-white hover:text-black transition font-manrope">
                Join Now →
              </button>
            </div>
          </div>

          {/* Statistics Box - Fixed mobile positioning and sizing */}
          <div className="absolute bottom-4 sm:bottom-8 lg:bottom-10 xl:bottom-5 2xl:bottom-8 left-4 sm:left-6 lg:left-8 xl:left-[12%] 2xl:left-[12%] right-4 sm:right-auto z-40 rounded-xl sm:rounded-2xl lg:rounded-[24px] xl:rounded-[28px] 2xl:rounded-[32px] border-2 border-[#FFFFFF]">
            <div className="rounded-[10px] sm:rounded-[14px] lg:rounded-[22px] xl:rounded-[26px] 2xl:rounded-[30px] backdrop-blur-md bg-white/10 px-3 sm:px-4 lg:px-5 xl:px-6 2xl:px-8 py-3 sm:py-4 lg:py-4 xl:py-5 2xl:py-4 shadow-xl">
              <div className="flex items-center justify-evenly sm:justify-start sm:space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-12 text-white font-manrope text-xs sm:text-sm xl:text-base 2xl:text-lg">
                {/* Logo - Better mobile sizing */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-full overflow-hidden flex items-center justify-center relative">
                    <Image
                      src="/assets/stat_logo.png"
                      alt="Since 1944"
                      fill
                      sizes="(max-width: 640px) 32px, (max-width: 1024px) 48px, (max-width: 1280px) 56px, 64px"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Statistics - Better mobile layout */}
                <div className="flex space-x-2 sm:space-x-3 lg:space-x-6 xl:space-x-8 2xl:space-x-10">
                  <div className="text-center">
                    <div className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-xl font-bold">
                      2500<sup className="text-xs">+</sup>
                    </div>
                    <div className="text-[9px] sm:text-[10px] xl:text-sm 2xl:text-sm text-[#CB9A57]">
                      Millers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-xl font-bold">
                      100k<sup className="text-xs">+</sup>
                    </div>
                    <div className="text-[9px] sm:text-[10px] xl:text-sm 2xl:text-sm text-[#CB9A57]">
                      Workforce
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-xl font-bold">
                      500<sup className="text-xs">+</sup>
                    </div>
                    <div className="text-[9px] sm:text-[10px] xl:text-sm 2xl:text-sm text-[#CB9A57] leading-tight">
                      Rice/<br className="sm:hidden" />Month
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-xl font-bold">
                      25<sup className="text-xs">+</sup>
                    </div>
                    <div className="text-[9px] sm:text-[10px] xl:text-sm 2xl:text-sm text-[#CB9A57]">
                      Districts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Cards - HIDDEN ON MOBILE/TABLET (below lg), VISIBLE ON LARGE SCREENS */}
        <div className="hidden lg:block absolute top-[45%] sm:top-[50%] lg:top-[56%] xl:top-[54%] 2xl:top-[54%] right-2 sm:right-4 lg:right-6 xl:right-30 2xl:right-6 transform -translate-y-1/2 z-40">
          <div className="w-[300px] lg:w-[280px] xl:w-[250px] 2xl:w-[300px] rounded-[24px] lg:rounded-[28px] xl:rounded-[32px] 2xl:rounded-[36px] bg-[#23433E] p-4 lg:p-5 xl:p-6 2xl:p-7">
            {/* Card 1 */}
            <div className="flex flex-col h-48 lg:h-48 xl:h-36 2xl:h-40 w-full mb-4 lg:mb-5 xl:mb-6 2xl:mb-7 rounded-xl xl:rounded-2xl 2xl:rounded-3xl overflow-hidden">
              <div className="relative h-[55%] lg:h-[58%] xl:h-[55%] 2xl:h-[58%] w-full">
                <Image
                  src="/assets/news1.jpg"
                  alt="News 1"
                  fill
                  sizes="(max-width: 1024px) 320px, (max-width: 1280px) 340px, 380px"
                  className="object-cover"
                />
                <div className="absolute bottom-0 w-full h-[8%] bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="h-[45%] lg:h-[42%] xl:h-[70%] 2xl:h-[65%] px-3 lg:px-4 xl:px-4 2xl:px-5 py-2 lg:py-3 xl:py-3 2xl:py-4 text-white bg-[#0A0000]/50 flex flex-col justify-start">
                <h3 className="text-sm lg:text-sm xl:text-sm 2xl:text-sm font-semibold leading-snug mb-2 lg:mb-2 xl:mb-2 2xl:mb-3">
                  New Government Subsidies for Rice Mill Modernization
                </h3>
                <p className="text-xs lg:text-xs xl:text-xs 2xl:text-xs text-gray-300 leading-relaxed">
                  The latest policy grants subsidies for upgrading rice mills
                  with modern technology to boost efficiency...
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col h-48 lg:h-48 xl:h-36 2xl:h-44 w-full rounded-xl xl:rounded-2xl 2xl:rounded-3xl overflow-hidden">
              <div className="relative h-[55%] lg:h-[58%] xl:h-[55%] 2xl:h-[58%] w-full">
                <Image
                  src="/assets/news2.jpg"
                  alt="News 2"
                  fill
                  sizes="(max-width: 1024px) 320px, (max-width: 1280px) 340px, 380px"
                  className="object-cover"
                />
                <div className="absolute bottom-0 w-full h-[8%] bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="h-[45%] lg:h-[42%] xl:h-[70%] 2xl:h-[65%] px-3 lg:px-4 xl:px-4 2xl:px-5 py-2 lg:py-3 xl:py-3 2xl:py-4 text-white bg-[#0A0000]/50 flex flex-col justify-start">
                <h3 className="text-sm lg:text-sm xl:text-sm 2xl:text-sm font-semibold leading-snug mb-2 lg:mb-2 xl:mb-2 2xl:mb-3">
                  Bengal&apos;s Rice Mills Face Rising Production Costs
                </h3>
                <p className="text-xs lg:text-xs xl:text-xs 2xl:text-xs text-gray-300 leading-relaxed">
                  Rice mills in Bengal face new challenges as costs rise due to
                  inflation and supply chain issues...
                </p>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-1 xl:gap-2 2xl:gap-3 mt-3 lg:mt-4 xl:mt-5 2xl:mt-6">
              <span className="w-6 lg:w-8 xl:w-10 2xl:w-12 h-1 xl:h-1.5 2xl:h-2 rounded-full bg-[#C29144]"></span>
              <span className="w-2 xl:w-3 2xl:w-4 h-1 xl:h-1.5 2xl:h-2 rounded-full bg-[#C29144]"></span>
              <span className="w-2 xl:w-3 2xl:w-4 h-1 xl:h-1.5 2xl:h-2 rounded-full bg-[#C29144]"></span>
              <span className="w-2 xl:w-3 2xl:w-4 h-1 xl:h-1.5 2xl:h-2 rounded-full bg-[#C29144]"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}