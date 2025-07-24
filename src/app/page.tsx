import VideoRoundedBox from "@/components/VideoRoundedBox";
import HeroSection from "@/components/HeroSection";
import React from "react";
import TextBanner from "@/components/TextBanner";
import Footer from "@/components/Footer";
import RiceMillsChallenges from "@/components/RiceMillsChallenges";
import Strategic from "@/components/Strategic";
import BannerText from "@/components/BannerText";
import Together from "@/components/Together";
import VideoGallerySection from "@/components/VideoGallerySection";
import IndustryUpdates from "@/components/IndustryUpdates";
import JoinSection from "@/components/JoinSection";

const page = () => {
  return (
    <div>
      <VideoRoundedBox />
      <HeroSection />
      <TextBanner />
      <RiceMillsChallenges />
      <Strategic />
      <BannerText />
      <Together />
      <VideoGallerySection />
      <IndustryUpdates />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default page;
