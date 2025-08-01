"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = [
  {
    id: 1,
    label: "Procurement & Supply Solutions",
    icon: "https://brma-web.smepulse.in/assets/rice_icon_1.png",
    activeIcon: "https://brma-web.smepulse.in/assets/rice_icon.png",
    bg: "#A16E28",
    image: "https://brma-web.smepulse.in/assets/subtract1.jpg",
    title: "BRMA Empowers Rice Mills with Innovative Solutions.",
    description: "We at Bengal Rice Mills Association (BRMA) enable rice millers to go beyond their limitations and achieve success.",
  },
  {
    id: 2,
    label: "Energy Savings & Support",
    icon: "https://brma-web.smepulse.in/assets/tractor_icon.png",
    activeIcon: "https://brma-web.smepulse.in/assets/tractor_icon_1.png",
    bg: "#2E685F",
    image: "https://brma-web.smepulse.in/assets/rice_1.jpg",
    title: "Revolutionary Energy Solutions for Rice Mills.",
    description: "BRMA provides cutting-edge energy-saving technologies and support systems to optimize your mill operations.",
  },
  {
    id: 3,
    label: "Workforce Development & Network",
    icon: "https://brma-web.smepulse.in/assets/user_icon.png",
    activeIcon: "https://brma-web.smepulse.in/assets/user_icon_1.png",
    bg: "#2E685F",
    image: "https://brma-web.smepulse.in/assets/rice_2.jpg",
    title: "Building Strong Networks and Skilled Workforce.",
    description: "Connect with industry professionals and develop your team through BRMA's comprehensive training programs.",
  },
  {
    id: 4,
    label: "Simplified Policy Advocacy",
    icon: "https://brma-web.smepulse.in/assets/windmill_icon.png",
    activeIcon: "https://brma-web.smepulse.in/assets/windmill_icon_1.png",
    bg: "#2E685F",
    image: "https://brma-web.smepulse.in/assets/rice_3.jpg",
    title: "Advocating for Better Industry Policies.",
    description: "BRMA represents rice mill interests in policy discussions, ensuring favorable regulations for the industry.",
  },
  {
    id: 5,
    label: "Digital Engagement",
    icon: "https://brma-web.smepulse.in/assets/bag_icon.png",
    activeIcon: "https://brma-web.smepulse.in/assets/bag_icon_1.png",
    bg: "#2E685F",
    image: "https://brma-web.smepulse.in/assets/rice_4.jpg",
    title: "Digital Transformation for Modern Mills.",
    description: "Embrace digital solutions and modern engagement strategies to stay ahead in the competitive market.",
  },
];

export default function ClipPathCard() {
  const [activeTab, setActiveTab] = useState(0);
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
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="min-h-screen w-full bg-[#0d2824] relative pt-8 sm:pt-12 md:pt-4 lg:pt-4 xl:pt-12 2xl:pt-4 pb-4 sm:pb-16 md:pb-2 lg:pb-4 xl:pb-2 2xl:pb-2">
      {/* Large Desktop Layout (1280px and above) */}
      <div className="hidden xl:flex items-center justify-center py-4 sm:py-4 sm:pb-16 min-h-screen">
        <div className="relative w-full h-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-2">
          {/* Top Heading */}
          <div className="absolute top-[10px] right-24 xl:right-32 2xl:right-48 z-40 text-right max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold font-elmessiri">
              Get Strategic Solutions from <br />
              Bengal Rice Mills Association
            </h2>
          </div>

          {/* Clipped Main Container */}
          <div className="relative w-full max-w-[800px] sm:max-w-[900px] md:max-w-[1100px] lg:max-w-[1300px] xl:max-w-[1550px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
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

            {/* Left Image Card with Custom Clip Path */}
            <div className="absolute top-[10px] sm:top-[15px] md:top-[18px] lg:top-[20px] xl:top-[20px] left-[20px] sm:left-[30px] md:left-[40px] lg:left-[45px] xl:left-[50px] w-[300px] sm:w-[360px] md:w-[420px] lg:w-[500px] xl:w-[580px] h-[280px] sm:h-[330px] md:h-[400px] lg:h-[475px] xl:h-[550px] z-10">
              {/* Golden border frame */}
              <div className="w-full h-full bg-[#d6a14d] rounded-[20px] p-1 relative">
                {/* Image container with CSS inverted radius */}
                <div 
                  className="relative w-full h-full overflow-hidden rounded-[18px]"
                  style={{
                    '--r': '15px',
                    '--s': '30px',
                    '--x': '450px',
                    '--y': '186px',
                    '--_m': '/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%)',
                    '--_g': 'conic-gradient(from 180deg at var(--r) calc(100% - var(--r)),#0000 25%,#000 0)',
                    '--_d': 'calc(var(--s) + var(--r))',
                    mask: `
                      calc(var(--_d) + var(--x)) 100% var(--_m),
                      0 calc(100% - var(--_d) - var(--y)) var(--_m),
                      radial-gradient(var(--s) at 0 100%,#0000 99%,#000 calc(100% + 1px)) 
                       calc(var(--r) + var(--x)) calc(-1*var(--r) - var(--y)),
                      var(--_g) calc(var(--_d) + var(--x)) 0,
                      var(--_g) 0 calc(-1*var(--_d) - var(--y))
                    `,
                    maskRepeat: 'no-repeat'
                  } as React.CSSProperties}
                >
                  <Image
                    src={tabs[activeTab].image}
                    alt="Rice Field"
                    fill
                    className="object-cover transition-all duration-700 ease-in-out"
                    key={`image-${activeTab}`}
                  />
                  
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Text Content Overlay - positioned at bottom left */}
                <div className="absolute bottom-2 left-4 right-[20%] z-50">
                  <div className="bg-[#d6a14d] bg-opacity-95 backdrop-blur-sm p-4 rounded-lg">
                    <h2 className="font-semibold text-lg xl:text-2xl font-elmessiri text-[#20261E] mb-2">
                      {tabs[activeTab].title}
                    </h2>
                    <p className="text-sm xl:text-sm text-[#20261E] mb-3 font-poppins leading-relaxed">
                      {tabs[activeTab].description}
                    </p>
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#6F4307] font-semibold text-sm text-[#20261E] hover:bg-[#6F4307] hover:text-white transition-all duration-300">
                      Know More
                      <span className="text-lg">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Tab List */}
            <div className="absolute top-[155px] sm:top-[175px] md:top-[190px] lg:top-[205px] xl:top-[140px] left-[380px] sm:left-[450px] md:left-[540px] lg:left-[620px] xl:left-[700px] w-[350px] sm:w-[410px] md:w-[480px] lg:w-[540px] xl:w-[600px] z-10">
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-5">
                {tabs.map((tab, index) => (
                  <div
                    key={tab.id}
                    className="flex w-full h-[45px] sm:h-[52px] md:h-[60px] lg:h-[66px] xl:h-[68px] rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => handleTabClick(index)}
                  >
                    {/* Left section - only visible for non-active tabs */}
                    <div className={`flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-4 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] px-2 sm:px-3 md:px-3 lg:px-4 xl:px-4 py-1 sm:py-1 md:py-2 lg:py-2 xl:py-2 transition-colors duration-300 ${
                      index === activeTab ? 'bg-transparent opacity-0' : 'bg-[#23433E] hover:bg-[#2a4e47] opacity-100'
                    }`}>
                      <span className="bg-[#38665F] text-white text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold px-4 sm:px-6 md:px-8 lg:px-9 xl:px-10 py-1 sm:py-1 md:py-2 lg:py-2 xl:py-2 rounded-full transition-all duration-300 hover:bg-[#4a7d75]">
                        {tab.id}
                      </span>
                      <div className="relative w-[25px] sm:w-[30px] md:w-[35px] lg:w-[40px] xl:w-[45px] h-[25px] sm:h-[30px] md:h-[35px] lg:h-[40px] xl:h-[45px]">
                        {/* Placeholder icon */}
                        <div className="relative w-[25px] sm:w-[30px] md:w-[35px] lg:w-[40px] xl:w-[45px] h-[25px] sm:h-[30px] md:h-[35px] lg:h-[40px] xl:h-[45px]">
                        <Image
                          src={tab.icon}
                          alt="icon"
                          fill
                          className="object-contain"
                        />
                      </div>
                      </div>
                    </div>

                    {/* Right section - label area */}
                    <div className={`backdrop-blur-md px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 flex items-center rounded-r-md transition-all duration-300 ${
                      index === activeTab 
                        ? 'bg-white/10 border-2 border-[#d6a14d] hover:bg-white/15 w-[230px] sm:w-[270px] md:w-[320px] lg:w-[360px] xl:w-[400px] mr-10' 
                        : 'bg-white/10 hover:bg-white/15 flex-1'
                    }`}>
                      <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-white font-elmessiri">
                        {tab.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Moving Notch Capsule */}
            <div 
              className="absolute w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[270px] h-[45px] sm:h-[52px] md:h-[60px] lg:h-[66px] xl:h-[74px] rounded-r-xl sm:rounded-r-xl md:rounded-r-2xl lg:rounded-r-2xl xl:rounded-r-2xl bg-[#d6a14d] z-40 flex items-center justify-evenly px-2 sm:px-3 md:px-3 lg:px-4 xl:px-4 transition-all duration-500 ease-in-out"
              style={{
                top: `${135 + (activeTab * 88)}px`,
                left: `${630}px`,
              }}
            >
              <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold rounded-full bg-[#A16E28] px-4 sm:px-6 md:px-8 lg:px-9 xl:px-10 py-1 sm:py-1 md:py-2 lg:py-2 xl:py-2 transition-all duration-300">
                {tabs[activeTab].id}
              </span>
              <div className="relative w-[35px] sm:w-[40px] md:w-[50px] lg:w-[55px] xl:w-[60px] h-[35px] sm:h-[40px] md:h-[50px] lg:h-[55px] xl:h-[60px]">
                {/* Placeholder active icon */}
                <div className="relative w-[35px] sm:w-[40px] md:w-[50px] lg:w-[55px] xl:w-[60px] h-[35px] sm:h-[40px] md:h-[50px] lg:h-[55px] xl:h-[60px]">
                <Image
                  src={tabs[activeTab].activeIcon}
                  alt="icon"
                  fill
                  className="object-contain transition-all duration-300"
                  key={`icon-${activeTab}`}
                />
                </div>
              </div>
            </div>

            {/* Horizontal Gradient Separator Line */}
            <div className="absolute bottom-24 sm:bottom-28 md:bottom-36 lg:bottom-44 xl:bottom-48 left-0 w-full h-[1px] flex justify-center items-center z-30">
              <div
                className="w-[90%] sm:w-[92%] md:w-[94%] lg:w-[95%] xl:w-[95%] h-[1px] rounded-full"
                style={{
                  background:
                    "linear-gradient(to right, #24372E, #999999, #24372E)",
                }}
              />
            </div>
          </div>

          {/* Bottom Section: Grievance */}
          <div className="absolute -bottom-20 sm:-bottom-15 md:-bottom-12 lg:-bottom-10 xl:-bottom-10 left-8 sm:left-16 md:left-24 lg:left-32 xl:left-44 z-40 max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[450px] xl:max-w-[500px]">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-elmessiri">
              Share Your Grievance,
              <br />
              Find the Best Solution
            </h2>
            <div className="flex items-center gap-[2px] sm:gap-[3px] md:gap-[3px] lg:gap-[4px] xl:gap-[4px] mb-2 sm:mb-3 md:mb-3 lg:mb-4 xl:mb-4">
              <div className="w-2 sm:w-2 md:w-3 lg:w-3 xl:w-3 h-[4px] sm:h-[5px] md:h-[5px] lg:h-[6px] xl:h-[6px] bg-yellow-400 rounded-full" />
              <div className="w-1 sm:w-1 md:w-2 lg:w-2 xl:w-2 h-[4px] sm:h-[5px] md:h-[5px] lg:h-[6px] xl:h-[6px] bg-yellow-400 rounded-full" />
              <div className="w-2 sm:w-2 md:w-3 lg:w-3 xl:w-3 h-[4px] sm:h-[5px] md:h-[5px] lg:h-[6px] xl:h-[6px] bg-yellow-400 rounded-full" />
              <div className="w-24 sm:w-28 md:w-32 lg:w-34 xl:w-36 h-[4px] sm:h-[5px] md:h-[5px] lg:h-[6px] xl:h-[6px] bg-yellow-400 rounded-full" />
            </div>
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-[#f9f9f9] mt-1 font-poppins">
              Your grievance matters—BRMA has been the voice of rice mills since
              1944. Write to us.
            </p>
          </div>

          {/* Contact Form Capsule */}
          <div className="absolute bottom-[16px] xl:bottom-[18px] 2xl:bottom-[16px] right-16 xl:right-15 2xl:right-24 z-50">
            <div className="rounded-[16px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[22px] xl:rounded-[24px] w-[300px] sm:w-[350px] md:w-[420px] lg:w-[500px] xl:w-[580px]">
              {/* Name & Email Inputs */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-4 mb-2 sm:mb-3 md:mb-3 lg:mb-4 xl:mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/10 backdrop-blur-md placeholder-white text-white px-2 sm:px-3 md:px-3 lg:px-4 xl:px-4 py-1 sm:py-2 md:py-2 lg:py-2 xl:py-2 rounded-md w-full outline-none text-xs sm:text-sm md:text-sm lg:text-base xl:text-base transition-all duration-300 focus:bg-white/20 focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/10 backdrop-blur-md placeholder-white text-white px-2 sm:px-3 md:px-3 lg:px-4 xl:px-4 py-1 sm:py-2 md:py-2 lg:py-2 xl:py-2 rounded-md w-full outline-none text-xs sm:text-sm md:text-sm lg:text-base xl:text-base transition-all duration-300 focus:bg-white/20 focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Textarea with L-shape */}
              <div className="relative h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] xl:h-[100px]">
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
                    className="w-full h-full px-2 sm:px-3 md:px-3 lg:px-4 xl:px-4 py-2 sm:py-2 md:py-3 lg:py-3 xl:py-3 bg-transparent resize-none outline-none text-white placeholder-white text-xs sm:text-sm md:text-sm lg:text-base xl:text-base transition-all duration-300 focus:bg-white/10"
                  />
                </div>

                {/* Submit button inside the notch */}
                <div className="absolute bottom-0 right-0 translate-x-[-10%] translate-y-[15%]">
                  <button
                    onClick={handleSubmit}
                    className="bg-[#facc15] text-black font-semibold px-2 sm:px-3 md:px-3 lg:px-4 xl:px-4 py-1 sm:py-2 md:py-2 lg:py-2 xl:py-2 rounded-full shadow-md hover:scale-105 transition-transform flex items-center gap-1 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 text-xs sm:text-sm md:text-sm lg:text-base xl:text-base hover:bg-[#f59e0b] duration-300"
                  >
                    Submit <span className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">↗</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout (Below 1280px) */}
      <div className="xl:hidden py-4 min-h-screen">
        <div className="relative w-full h-full max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-2">
          <div className="space-y-8">
            {/* Title Section */}
            <div className="text-center">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug font-elmessiri">
                Get Strategic Solutions from <br />
                Bengal Rice Mills Association
              </h2>
            </div>

            {/* Image Container */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-2xl">
                <div className="bg-[#d6a14d] rounded-[20px] p-4 aspect-[4/3] relative overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <Image
                      src={tabs[activeTab].image}
                      alt="Rice Field"
                      fill
                      className="object-cover transition-all duration-700 ease-in-out"
                      key={`mobile-image-${activeTab}`}
                    />
                  </div>

                  {/* Overlay Text */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg text-[#20261E] bg-[#d6a14d] bg-opacity-90 backdrop-blur-sm transition-all duration-500 ease-in-out">
                    <h3 className="font-bold text-lg md:text-xl lg:text-2xl font-elmessiri mb-2">
                      {tabs[activeTab].title}
                    </h3>
                    <p className="text-sm md:text-base font-poppins mb-3">
                      {tabs[activeTab].description}
                    </p>
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#6F4307] font-semibold text-sm md:text-base hover:bg-[#6F4307] hover:text-white transition-all duration-300">
                      Know More
                      <span className="text-lg">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab List */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {tabs.map((tab, index) => (
                  <div
                    key={tab.id}
                    className={`flex items-center gap-4 p-4 lg:p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                      index === activeTab
                        ? "bg-[#d6a14d] border-2 border-[#A16E28] shadow-lg scale-[1.02]"
                        : "bg-[#23433E] border border-[#38665F] hover:bg-[#2a4e47] hover:border-[#4a7d75] hover:scale-[1.01]"
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    <div
                      className={`flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full text-white font-bold text-lg lg:text-xl transition-all duration-300 ${
                        index === activeTab ? "bg-[#A16E28]" : "bg-[#38665F]"
                      }`}
                    >
                      {tab.id}
                    </div>
                    <div className="relative w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 bg-white rounded p-1">
                      <div className="w-full h-full bg-gray-400 rounded"></div>
                    </div>
                    <p
                      className={`text-lg lg:text-xl xl:text-2xl font-elmessiri flex-1 transition-colors duration-300 ${
                        index === activeTab ? "text-[#20261E]" : "text-white"
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

            {/* Bottom Title */}
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

            {/* Input Fields */}
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/10 backdrop-blur-md placeholder-white text-white px-4 py-3 lg:py-4 rounded-md w-full outline-none text-base transition-all duration-300 focus:bg-white/20 focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/10 backdrop-blur-md placeholder-white text-white px-4 py-3 lg:py-4 rounded-md w-full outline-none text-base transition-all duration-300 focus:bg-white/20 focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full bg-white/10 backdrop-blur-md placeholder-white text-white px-4 py-3 lg:py-4 rounded-md resize-none outline-none text-base transition-all duration-300 focus:bg-white/20 focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div className="flex justify-center lg:justify-start">
                  <button
                    onClick={handleSubmit}
                    className="bg-[#facc15] text-black font-semibold px-6 py-3 lg:px-8 lg:py-4 rounded-full shadow-md hover:scale-105 transition-transform flex items-center gap-2 text-base hover:bg-[#f59e0b] duration-300"
                  >
                    Submit <span className="text-sm">↗</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}