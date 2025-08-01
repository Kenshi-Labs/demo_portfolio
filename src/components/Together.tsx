"use client";
import React from "react";
import Image from "next/image";

export default function Together() {
  return (
    <div className="min-h-screen bg-[#0d2824] flex items-center justify-center px-2 sm:px-4 py-8 sm:py-32 pb-4 sm:pb-16 md:pb-2 lg:pb-4 xl:pb-24 2xl:pb-24 pt-4 sm:pt-12 md:pt-8 lg:pt-6 xl:pt-14 2xl:pt-10">
      <div className="relative flex max-w-[1450px] xl:max-w-[1350px] 2xl:max-w-[1450px] w-full xl:h-[650px] h-auto rounded-2xl overflow-visible mx-auto px-4 sm:px-6 lg:px-2">
        {/* Desktop Layout (1280px and above) */}
        <div className="hidden xl:block w-full h-full rounded-2xl overflow-hidden">
          <Image
            src="https://brma-web.smepulse.in/assets/grain_rice.jpg"
            alt="Rice Field"
            width={1400}
            height={650}
            className="w-full h-full object-cover blur-sm"
          />
        </div>

        {/* Desktop Vertical Card Stack (Top-Left) - Aligned with ClipPathCard spacing */}
        <div className="hidden xl:block absolute top-[-50px] left-8 sm:left-16 md:left-24 lg:left-32 xl:left-44 z-20 space-y-18">
          {[
            {
              img: "https://brma-web.smepulse.in/assets/subtract_1.png",
              title: "Locate Mills",
              desc: "Maps to Locate Mills Nearby",
            },
            {
              img: "https://brma-web.smepulse.in/assets/subtract_2.png",
              title: "Machinery Details",
              desc: "Find the latest machinery for your mill",
            },
            {
              img: "https://brma-web.smepulse.in/assets/subtract_3.png",
              title: "Workforce / Vendor Details",
              desc: "Find skilled workforce near you",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`relative w-[500px] h-[200px] rounded-xl overflow-hidden ${
                i === 2 ? "mb-44" : ""
              }`}
            >
              {/* Background Image */}
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
              />

              {/* Bottom Mask */}
              <div className="absolute bottom-0 left-0 w-full h-[68px] z-10">
                <Image
                  src="https://brma-web.smepulse.in/assets/mask.png"
                  alt="Card Mask"
                  layout="fill"
                  objectFit="cover"
                  className="pointer-events-none"
                />
              </div>

              {/* Text + Button */}
              <div className="absolute bottom-0 left-0 z-20 w-full px-6 pb-4 flex justify-between">
                {/* Text Block */}
                <div className="absolute bottom-4 left-6 z-20 text-white font-poppins">
                  <p className="text-lg font-semibold">{card.title}</p>
                  <p className="text-sm opacity-90">{card.desc}</p>
                </div>

                {/* Button */}
                <div className="absolute bottom-0 right-3 z-20">
                  <button className="bg-[#FFD02F] text-[#181818] text-sm px-10 py-2 rounded-full shadow-md hover:bg-[#FFD02F]/90 transition-colors flex items-center gap-1 font-semibold font-poppins">
                    Visit ↗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Right Side Box - Aligned with ClipPathCard spacing */}
        <div className="hidden xl:block absolute right-16 xl:right-2 2xl:right-2 top-[-50px] h-[750px] w-[45%] bg-[#11332e] rounded-r-[20px] text-white p-10 flex flex-col justify-between z-10 overflow-hidden">
          <div>
            <h1 className="text-7xl font-semibold leading-tight ml-10 font-elmessiri">
              Bringing West <br />
              Bengal&#39;s Rice <br />
              Mills Together!
            </h1>
            <p className="text-xl mt-4 text-[#FFFFFF] font-normal ml-10 font-poppins">
              Bengal Rice Mills Association (BRMA) <br />
              empowers Rice Millers in West Bengal with <br />
              resources, solutions, and support.
            </p>
          </div>

          {/* Mandala Image */}
          <div className="absolute bottom-[5px] right-[2px] w-[350px] h-[350px]">
            <Image
              src="https://brma-web.smepulse.in/assets/mandala.png"
              alt="Mandala"
              width={350}
              height={350}
              className="opacity-90"
            />
          </div>
        </div>

        {/* Mobile/Tablet Layout (1280px and below) - Using ClipPathCard container structure */}
        <div className="xl:hidden w-full flex flex-col space-y-6 sm:space-y-8 max-w-[1450px] mx-auto">
          {/* Rectangular Feature Cards */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full">
            {[
              {
                img: "https://brma-web.smepulse.in/assets/subtract_1.png",
                title: "Locate Mills",
                desc: "Maps to Locate Mills Nearby",
              },
              {
                img: "https://brma-web.smepulse.in/assets/subtract_2.png",
                title: "Machinery Details",
                desc: "Find the latest machinery for your mill",
              },
              {
                img: "https://brma-web.smepulse.in/assets/subtract_3.png",
                title: "Workforce / Vendor Details",
                desc: "Find skilled workforce near you",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="relative w-full h-[88px] sm:h-[140px] md:h-[160px] rounded-xl overflow-hidden"
              >
                {/* Background Image */}
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />

                {/* Bottom Mask */}
                <div className="absolute bottom-0 left-0 w-full h-[50px] sm:h-[60px] md:h-[68px] bg-[black]/25"/>
                 

                {/* Text Block - Left Side */}
                <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 z-20 text-white font-poppins">
                  <p className="text-sm sm:text-base md:text-lg font-semibold leading-tight">
                    {card.title}
                  </p>
                  <p className="text-xs sm:text-sm opacity-90 mt-1">
                    {card.desc}
                  </p>
                </div>

                {/* Button - Top Right Bottom */}
                <div className="absolute top-12 sm:top-28 right-4 sm:right-6 z-20">
                  <button className="bg-[#FFD02F] text-[#181818] text-xs sm:text-sm px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 rounded-full shadow-md hover:bg-[#FFD02F]/90 transition-colors flex items-center gap-1 font-semibold font-poppins">
                    Visit ↗
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Content Card */}
          <div className="w-full bg-[#11332e] rounded-2xl text-white p-6 sm:p-8 md:p-10 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight font-elmessiri mb-4 sm:mb-6">
                Bringing West <br />
                Bengal&#39;s Rice <br />
                Mills Together!
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF] font-normal font-poppins">
                Bengal Rice Mills Association (BRMA) <br className="hidden sm:block" />
                empowers Rice Millers in West Bengal with <br className="hidden sm:block" />
                resources, solutions, and support.
              </p>
            </div>

            {/* Mandala Image */}
            <div className="absolute bottom-0 right-0 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] opacity-50 sm:opacity-70 md:opacity-90">
              <Image
                src="https://brma-web.smepulse.in/assets/mandala.png"
                alt="Mandala"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}