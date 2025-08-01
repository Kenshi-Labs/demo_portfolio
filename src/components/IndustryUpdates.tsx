"use client";

import Image from "next/image";

const updates = [
  {
    title:
      "West Bengal increases paddy milling charges, benefiting rice mills.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever seen the 1500s",
    date: "12th Nov 2024",
    image: "https://brma-web.smepulse.in/assets/industry_updates.jpg",
  },
  {
    title: (
      <>
        State increases
        <br />
        milling charges for
        <br />
        Bengal rice mills.
      </>
    ),
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever seen the 1500s",
    date: "12th Nov 2024",
    image: "https://brma-web.smepulse.in/assets/industry_updates4.jpg",
  },
  {
    title: "Bengal rice mills halt contracts over milling charge disputes.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever seen the 1500s",
    date: "12th Nov 2024",
    image: "https://brma-web.smepulse.in/assets/industry_updates2.jpg",
  },
  {
    title: "Centre lifts non-basmati rice export ban, Bengal mills relieved.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever seen the 1500s",
    date: "12th Nov 2024",
    image: "https://brma-web.smepulse.in/assets/industry_updates3.jpg",
  },
];

export default function IndustryUpdates() {
  return (
    <div className="bg-[#0d2824] text-white  px-4 md:px-8 pb-4 sm:pb-16 md:pb-2 lg:pb-4 xl:pb-2 2xl:pb-0 pt-4 sm:pt-12 md:pt-2 lg:pt-3 xl:pt-4 2xl:pt-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-6xl font-medium font-elmessiri">
          Latest Industry Updates
        </h2>

        {/* Dotted Yellow Line */}
        <div className="flex justify-center items-center mt-3 mb-4 gap-1">
          <div className="w-36 h-1.5 bg-yellow-400 rounded-full" />
          <div className="w-5 h-1.5 bg-yellow-400 rounded-full" />
          <div className="w-1 h-1.5 bg-yellow-400 rounded-full" />
          <div className="w-5 h-1.5 bg-yellow-400 rounded-full" />
          <div className="w-36 h-1.5 bg-yellow-400 rounded-full" />
        </div>

        <p className="text-base max-w-2xl mx-auto text-gray-300 font-poppins">
          For the latest industry updates and expert insights, BRMA is the
          trusted backbone of West Bengal’s rice millers, unifying tradition,
          innovation, and growth.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-6 max-w-[1450px] mx-auto">
        {/* Left column - vertical card */}
        <div className="group relative overflow-hidden rounded-3xl h-[500px]">
          <Image
            src={updates[0].image}
            alt=""
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 p-6 flex flex-col justify-end">
            {/* Title & Date block that moves up on hover */}
            <div className="transition-all duration-500 transform group-hover:-translate-y-12 z-10">
              <span className="bg-white/10 backdrop-blur-xs text-xs text-white px-3 py-1 rounded-full inline-block w-fit font-poppins mb-2">
                {updates[0].date}
              </span>
              <h3 className="text-2xl font-semibold font-elmessiri text-white leading-snug">
                {updates[0].title}
              </h3>
            </div>

            {/* Subtitle - absolutely positioned, hidden until hover */}
            <p className="absolute bottom-6 left-6 right-6 text-sm text-white font-poppins opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
              {updates[0].subtitle}
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          {/* Top rectangle */}
          <div className="group relative overflow-hidden rounded-3xl h-[255px]">
            <Image
              src={updates[1].image}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

            {/* Text Content */}
            <div className="absolute inset-0 px-6 py-4 flex flex-col justify-center z-10">
              {/* Date + Title block */}
              <div className="transition-all duration-500 ease-in-out transform group-hover:-translate-y-2">
                {/* Date */}
                <span className="bg-black/40 backdrop-blur-2xl text-xs text-white px-3 py-1 rounded-full font-poppins mb-2 inline-block">
                  {updates[1].date}
                </span>

                {/* Title (non-hover) */}
                <h3 className="text-2xl font-semibold font-elmessiri leading-snug text-white block group-hover:hidden">
                  {updates[1].title}
                </h3>

                {/* Title (on hover) */}
                <h3 className="text-2xl font-semibold font-elmessiri leading-snug text-white hidden group-hover:block">
                  State increases milling charges for <br />
                  Bengal rice mills.
                </h3>
              </div>

              {/* Subtitle - hidden initially, absolutely positioned to avoid layout shift */}
              <p className="absolute bottom-4 left-6 right-6 text-sm text-white font-poppins opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                {updates[1].subtitle}
              </p>
            </div>
          </div>

          {/* Bottom row - 2 square images */}
          <div className="grid grid-cols-2 gap-6">
            {[updates[2], updates[3]].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl h-[220px]"
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/25 p-4 flex flex-col justify-end">
                  {/* Title & Date Block */}
                  <div className="transition-all duration-500 transform group-hover:-translate-y-16 z-10">
                    <span className="bg-white/10 backdrop-blur-xs text-xs text-white px-3 py-1 rounded-full inline-block w-fit font-poppins mb-2">
                      {item.date}
                    </span>
                    <h3 className="text-lg font-semibold font-elmessiri text-white">
                      {item.title}
                    </h3>
                  </div>

                  {/* Subtitle (hover only, absolutely positioned to avoid layout shift) */}
                  <p className="absolute bottom-4 left-4 right-4 text-xs text-white font-poppins opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-normal font-poppins px-6 py-3 rounded-full shadow-md transition duration-300">
          View more news
        </button>
      </div>
    </div>
  );
}
