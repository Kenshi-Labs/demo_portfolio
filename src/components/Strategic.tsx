"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = [
  {
    id: 1,
    label: "Procurement & Supply Solutions",
    icon: "/assets/rice_icon.png",
    bg: "#A16E28",
  },
  {
    id: 2,
    label: "Energy Savings & Support",
    icon: "/assets/tractor_icon.png",
    bg: "#2E685F",
  },
  {
    id: 3,
    label: "Workforce Development & Network",
    icon: "/assets/user_icon.png",
    bg: "#2E685F",
  },
  {
    id: 4,
    label: "Simplified Policy Advocacy",
    icon: "/assets/windmill_icon.png",
    bg: "#2E685F",
  },
  {
    id: 5,
    label: "Digital Engagement",
    icon: "/assets/bag_icon.png",
    bg: "#2E685F",
  },
];

export default function ClipPathCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen w-full bg-[#0d2824] relative">
      {/* Large Desktop Layout (1280px and above) */}
      <div className="hidden xl:flex items-center justify-center px-4 py-12 min-h-screen">
        {/* Top Heading */}
        <div className="absolute top-[35px] right-[150px] z-40 text-right max-w-[700px]">
          <h2 className="text-white text-5xl font-semibold leading-snug font-elmessiri">
            Get Strategic Solutions from <br />
            Bengal Rice Mills Association
          </h2>
        </div>

        {/* Clipped Main Container */}
        <div className="relative w-full max-w-[1440px] h-[800px]">
          {/* SVG Clip Path Definition */}
          <svg width="0" height="0">
            <defs>
              <clipPath id="clipRoundedTabs" clipPathUnits="objectBoundingBox">
                <path
                  d="M0.02,0.05
                     Q0.02,0.00 0.035,0.00
                     H0.41
                     Q0.45,0.00 0.45,0.04
                     V0.11
                     Q0.45,0.15 0.49,0.15
                     H0.93
                     Q0.97,0.15 0.97,0.19
                     V0.96
                     Q0.97,1.00 0.93,1.00
                     H0.59
                     Q0.55,1.00 0.55,0.96
                     V0.85
                     Q0.55,0.81 0.51,0.81
                     H0.07
                     Q0.02,0.81 0.02,0.76
                     Z"
                />
              </clipPath>
            </defs>
          </svg>

          {/* Green Background with Clip Path */}
          <div
            className="w-full h-full bg-[#223c33] absolute inset-0"
            style={{ clipPath: "url(#clipRoundedTabs)" }}
          />

          {/* Left Image Card */}
          <div className="absolute top-[20px] left-[40px] w-[580px] h-[550px] bg-[#d6a14d] rounded-[20px] p-4 flex flex-col justify-end z-10">
            <div
              className="relative w-full h-[620px] overflow-hidden rounded-3xl"
              style={{
                clipPath: `polygon(
                  0% 0%,
                  100% 0%,
                  100% 100%,
                  30% 100%,
                  30% 83%,
                  28% 83%,
                  28% 85%,
                  0% 85%
                )`,
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            >
              <Image
                src="/assets/subtract1.jpg"
                alt="Rice Field"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlay Text */}
            <div className="absolute bottom-2 left-2 p-4 rounded-lg text-[#20261E] z-50 bg-[#d6a14d] bg-opacity-80 backdrop-blur-sm">
              <h2 className="font-bold text-2xl font-elmessiri">
                BRMA Empowers Rice Mills with <br /> Innovative Solutions.
              </h2>
              <p className="text-sm mt-1 font-poppins">
                We at Bengal Rice Mills Association (BRMA) enable rice millers{" "}
                <br />
                to go beyond their limitations and achieve success.
              </p>
              <button className="mt-4 mb-2 inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#6F4307] font-semibold text-base">
                Know More
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>

          {/* Notch Capsule (ID and Icon) */}
          <div className="absolute top-[130px] left-[615px] w-[200px] h-[72px] rounded-r-2xl bg-[#d6a14d] z-30 flex items-center justify-between px-4">
            <span className="text-white text-3xl font-bold rounded-full bg-[#A16E28] px-10 py-2">
              {tabs[0].id}
            </span>
            <div className="relative w-[60px] h-[60px]">
              <Image
                src={tabs[0].icon}
                alt="icon"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* First Tab Content */}
          <div className="absolute top-[132px] left-[680px] w-[550px] z-20">
            <div className="flex items-center gap-4 backdrop-blur-md bg-white/10 px-6 py-4 rounded-md border-2 border-[#d6a14d] relative">
              <p className="text-2xl font-medium text-white font-elmessiri ml-32">
                {tabs[0].label}
              </p>
            </div>
          </div>

          {/* Remaining Tabs */}
          <div className="absolute top-[220px] left-[680px] w-[600px] z-10">
            <div className="flex flex-col gap-5">
              {tabs.slice(1).map((tab) => (
                <div
                  key={tab.id}
                  className="flex w-full h-[72px] rounded-xl overflow-hidden"
                >
                  <div className="flex items-center gap-4 bg-[#23433E] w-[200px] px-4 py-2">
                    <span className="bg-[#38665F] text-white text-2xl font-bold px-10 py-2 rounded-full">
                      {tab.id}
                    </span>
                    <div className="relative w-[45px] h-[45px]">
                      <Image
                        src={tab.icon}
                        alt="icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 backdrop-blur-md bg-white/10 px-6 flex items-center rounded-r-md">
                    <p className="text-2xl text-white font-elmessiri">
                      {tab.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Horizontal Gradient Separator Line */}
          <div className="absolute bottom-48 left-0 w-full h-[1px] flex justify-center items-center z-30">
            <div
              className="w-[95%] h-[1px] rounded-full"
              style={{
                background:
                  "linear-gradient(to right, #24372E, #999999, #24372E)",
              }}
            />
          </div>
        </div>

        {/* Bottom Section: Grievance */}
        <div className="absolute bottom-0 left-[200px] z-40 max-w-[500px]">
          <h2 className="text-white text-5xl font-elmessiri leading-snug">
            Share Your Grievance,
            <br />
            Find the Best Solution
          </h2>
          <div className="flex items-center gap-[4px] mb-4">
            <div className="w-3 h-[6px] bg-yellow-400 rounded-full" />
            <div className="w-2 h-[6px] bg-yellow-400 rounded-full" />
            <div className="w-3 h-[6px] bg-yellow-400 rounded-full" />
            <div className="w-36 h-[6px] bg-yellow-400 rounded-full" />
          </div>
          <p className="text-sm text-[#f9f9f9] mt-1 font-poppins">
            Your grievance matters—BRMA has been the voice of rice mills since
            1944. Write to us.
          </p>
        </div>

        {/* Contact Form Capsule */}
        <div className="absolute bottom-[70px] right-[92px] z-50">
          <div className="rounded-[24px] w-[580px]">
            {/* Name & Email Inputs */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-white/10 backdrop-blur-md placeholder-white text-white px-4 py-2 rounded-md w-full outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-white/10 backdrop-blur-md placeholder-white text-white px-4 py-2 rounded-md w-full outline-none"
              />
            </div>

            {/* Textarea with L-shape */}
            <div className="relative h-[100px]">
              <div
                className="w-full h-full bg-white/10 backdrop-blur-md text-white rounded-md"
                style={{
                  clipPath: `polygon(
                    0% 0%, 
                    100% 0%, 
                    100% 60%, 
                    78% 60%, 
                    78% 100%, 
                    0% 100%, 
                    0% 0%
                  )`,
                }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full h-full px-4 py-3 bg-transparent resize-none outline-none text-white placeholder-white"
                />
              </div>

              {/* Submit button inside the notch */}
              <div className="absolute bottom-0 right-0 translate-x-[-10%] translate-y-[15%]">
                <button
                  onClick={handleSubmit}
                  className="bg-[#facc15] text-black font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform flex items-center gap-2"
                >
                  Submit <span className="text-sm">↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stacked Layout (Below 1280px) */}
      <div className="xl:hidden px-4 py-8 min-h-screen">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* 1. Title Section */}
          <div className="text-center">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug font-elmessiri">
              Get Strategic Solutions from <br />
              Bengal Rice Mills Association
            </h2>
          </div>

          {/* 2. Image Container */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <div className="bg-[#d6a14d] rounded-[20px] p-4 aspect-[4/3] relative overflow-hidden">
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/subtract1.jpg"
                    alt="Rice Field"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg text-[#20261E] bg-[#d6a14d] bg-opacity-90 backdrop-blur-sm">
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl font-elmessiri mb-2">
                    BRMA Empowers Rice Mills with Innovative Solutions.
                  </h3>
                  <p className="text-sm md:text-base font-poppins mb-3">
                    We at Bengal Rice Mills Association (BRMA) enable rice
                    millers to go beyond their limitations and achieve success.
                  </p>
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#6F4307] font-semibold text-sm md:text-base">
                    Know More
                    <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Tab List */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {tabs.map((tab, index) => (
                <div
                  key={tab.id}
                  className={`flex items-center gap-4 p-4 lg:p-6 rounded-xl transition-all duration-300 ${
                    index === 0
                      ? "bg-[#d6a14d] border-2 border-[#A16E28] shadow-lg"
                      : "bg-[#23433E] border border-[#38665F] hover:bg-[#2a4e47] hover:border-[#4a7d75]"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full text-white font-bold text-lg lg:text-xl ${
                      index === 0 ? "bg-[#A16E28]" : "bg-[#38665F]"
                    }`}
                  >
                    {tab.id}
                  </div>
                  <div className="relative w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0">
                    <Image
                      src={tab.icon}
                      alt="icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p
                    className={`text-lg lg:text-xl xl:text-2xl font-elmessiri flex-1 ${
                      index === 0 ? "text-[#20261E]" : "text-white"
                    }`}
                  >
                    {tab.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Separator Line */}
          <div className="flex justify-center py-4">
            <div
              className="w-[80%] h-[1px] rounded-full"
              style={{
                background:
                  "linear-gradient(to right, #24372E, #999999, #24372E)",
              }}
            />
          </div>

          {/* 4. Bottom Title */}
          <div className="text-center lg:text-left max-w-4xl mx-auto">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-elmessiri leading-snug mb-6">
              Share Your Grievance, <br />
              Find the Best Solution
            </h2>
            <div className="flex items-center justify-center lg:justify-start gap-[4px] mb-4">
              <div className="w-3 h-[6px] bg-yellow-400 rounded-full" />
              <div className="w-2 h-[6px] bg-yellow-400 rounded-full" />
              <div className="w-3 h-[6px] bg-yellow-400 rounded-full" />
              <div className="w-36 h-[6px] bg-yellow-400 rounded-full" />
            </div>
            <p className="text-sm md:text-base text-[#f9f9f9] font-poppins">
              Your grievance matters—BRMA has been the voice of rice mills since
              1944. Write to us.
            </p>
          </div>

          {/* 5. Input Fields */}
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/10 backdrop-blur-md placeholder-white text-white px-4 py-3 lg:py-4 rounded-md w-full outline-none text-base"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/10 backdrop-blur-md placeholder-white text-white px-4 py-3 lg:py-4 rounded-md w-full outline-none text-base"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full bg-white/10 backdrop-blur-md placeholder-white text-white px-4 py-3 lg:py-4 rounded-md resize-none outline-none text-base"
                />
              </div>

              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={handleSubmit}
                  className="bg-[#facc15] text-black font-semibold px-6 py-3 lg:px-8 lg:py-4 rounded-full shadow-md hover:scale-105 transition-transform flex items-center gap-2 text-base"
                >
                  Submit <span className="text-sm">↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
