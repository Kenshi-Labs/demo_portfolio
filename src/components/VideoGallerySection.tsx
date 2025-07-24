"use client";

import React from "react";
import { Play, MoveRightIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { videos } from "../../data/videos";

const VideoGallerySection = () => {
  interface Video {
    id: number;
    title: string;
    subtitle: string;
    thumbnail: string;
  }

  const VideoCard = ({
    video,
    className = "",
    isLarge = false,
    noOverlay = false,
    textOverlay = null,
    noHoverScale = false,
  }: {
    video: Video;
    className?: string;
    isLarge?: boolean;
    noOverlay?: boolean;
    textOverlay?: React.ReactNode;
    noHoverScale?: boolean;
  }) => (
    <div
      className={`relative rounded-4xl overflow-hidden cursor-pointer group ${className}`}
    >
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${
          noHoverScale
            ? ""
            : noOverlay
            ? "group-hover:scale-105"
            : "group-hover:scale-110"
        }`}
        style={{ backgroundImage: `url(${video.thumbnail})` }}
      />
      {!noOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      )}
      <div className="absolute top-4 right-4 z-10">
        <div
          className={`${
            isLarge ? "w-10 h-10" : "w-10 h-10"
          } bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white shadow-lg`}
        >
          <Play
            size={isLarge ? 16 : 14}
            className="ml-0.5 text-gray-800"
            fill="currentColor"
          />
        </div>
      </div>
      <div className="absolute bottom-4 right-4 text-white text-right z-10">
        <h3
          className={`font-semibold mb-2 ${
            isLarge ? "text-lg" : "text-base"
          } font-poppins drop-shadow-lg`}
        >
          {video.title}
        </h3>
        <div className="flex items-center gap-2 text-white hover:text-white transition-colors justify-end">
          <span
            className={`${
              isLarge ? "text-sm" : "text-xs"
            } underline drop-shadow-md font-poppins`}
          >
            {video.subtitle}
          </span>
          <MoveRightIcon
            size={isLarge ? 14 : 12}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
      {textOverlay && (
        <div className="absolute bottom-5 left-8 max-w-md z-20">
          {textOverlay}
        </div>
      )}
    </div>
  );

  return (
    <div className="relative bg-[#0d2824] min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glassmorphism Box Behind */}
      <div className="absolute inset-0 z-0 flex items-center justify-center p-6">
        <div className="w-full max-w-[1450px] h-full rounded-4xl bg-white/10 backdrop-blur-md" />
      </div>

      {/* Video Section */}
      <section className="py-8 lg:py-20 px-6 max-w-[1350px] w-full mx-auto relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 font-work-sans text-white">
              Explore
              <br />
              <span className="text-[var(--primary-brown)] text-4xl font-work-sans">
                Our Videos
              </span>
            </h2>
            <p className="text-base md:text-lg text-white/80 font-manrope max-w-md mx-auto">
              Get an insight of our projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <VideoCard
                key={i}
                video={videos[i]}
                className="h-[250px] md:h-[280px]"
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="interior" className="shadow-lg">
              View All Videos
            </Button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 relative">
            <VideoCard
              video={videos[0]}
              className="h-[500px] lg:h-[600px]"
              isLarge
              noOverlay
              noHoverScale
            />
            <div className="absolute bottom-4 left-8 text-white max-w-md z-20">
              <h2 className="text-3xl lg:text-4xl text-white xl:text-4xl font-bold mb-1 leading-tight drop-shadow-2xl font-elmessiri">
                Discover BRMA’s
                <br />
                Legacy Today
              </h2>
              <div className="flex items-center gap-1 mb-4">
                <div className="w-3 h-1.5 bg-yellow-400 rounded-full" />
                <div className="w-2 h-1.5 bg-yellow-400 rounded-full" />
                <div className="w-3 h-1.5 bg-yellow-400 rounded-full" />
                <div className="w-36 h-1.5 bg-yellow-400 rounded-full" />
              </div>
              <p className="text-base lg:text-base mb-6 max-w-sm text-[var(--dark-gray)] font-poppins">
                Follow Bengal Rice Mills Association’s <br /> journey to see how
                we are turning our <br /> legacy into something exemplary.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-6">
            <VideoCard video={videos[1]} className="h-[180px] lg:h-[220px]" />
            <VideoCard video={videos[2]} className="h-[280px] lg:h-[350px]" />
          </div>

          <div className="lg:col-span-3 flex flex-col gap-6">
            <VideoCard video={videos[3]} className="h-[280px] lg:h-[350px]" />
            <VideoCard video={videos[4]} className="h-[180px] lg:h-[220px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoGallerySection;
