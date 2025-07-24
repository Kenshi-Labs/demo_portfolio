"use client";
import React from "react";

const TextBanner = () => {
  return (
    <div className="w-full bg-[#0d2824] py-4 sm:py-6 md:py-8 px-2 sm:px-4 overflow-hidden">
      <div className="animate-ticker whitespace-nowrap">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-[#005C4E] tracking-wide leading-tight font-elmessiri inline-block">
          Honoring Legacy, Uniting Rice Mills, Building the Future
        </h2>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-ticker {
          animation: ticker 20s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-ticker {
            animation: ticker 10s linear infinite;
          }
        }

        @media (min-width: 1024px) {
          .animate-ticker {
            animation: ticker 15s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default TextBanner;
