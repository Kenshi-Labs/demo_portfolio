"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    img: "grain_rice",
    text: "Rice millers struggle with procurement and supply‑chain issues.",
  },
  {
    img: "Bran_grain",
    text: "There is a lack of access to modern milling technology.",
  },
  {
    img: "open_grain",
    text: "Inadequate storage facilities lead to high post‑harvest losses.",
  },
  {
    img: "Field_Rice",
    text: "Fluctuating market prices impact profitability.",
  },
  {
    img: "Rice_grain",
    text: "Labor shortages and poor infrastructure are common challenges.",
  },
];

const THUMBS = Math.min(4, slides.length - 1);

const RiceMillsChallenges = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [history, setHistory] = useState<number[]>([]);
  const [displayedIndexes, setDisplayedIndexes] = useState<number[]>([]);

  const nextSlide = () => {
    const next = slides.findIndex(
      (_, i) => i !== currentIndex && !displayedIndexes.includes(i)
    );

    if (next === -1) return;

    setDirection("next");
    setHistory((prev) => [...prev, currentIndex]);
    setDisplayedIndexes((prev) => [...prev, currentIndex]);
    setCurrentIndex(next);
  };

  const prevSlide = () => {
    if (history.length === 0) return;

    const prev = history[history.length - 1];

    setDirection("prev");
    setCurrentIndex(prev);
    setHistory((prevHist) => prevHist.slice(0, -1));
    setDisplayedIndexes((prevDisp) => prevDisp.filter((idx) => idx !== prev));
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;

    setDirection(index > currentIndex ? "next" : "prev");
    setHistory((prev) => [...prev, currentIndex]);
    setDisplayedIndexes((prev) =>
      prev.includes(currentIndex) ? prev : [...prev, currentIndex]
    );
    setCurrentIndex(index);
  };

  // Manual carousel navigation for mobile/tablet
  const nextSlideSimple = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlideSimple = () => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const remainingThumbnails = slides
    .map((slide, i) => ({ ...slide, index: i }))
    .filter(
      ({ index }) => index !== currentIndex && !displayedIndexes.includes(index)
    )
    .slice(0, THUMBS);

  return (
    <div className="flex bg-[#0d2824] text-white min-h-screen">
      {/* Mobile & Tablet Layout (< 1024px) */}
      <div className="lg:hidden w-full p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8">
        {/* Header Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight font-elmessiri mb-4">
            Challenges faced by Rice Mills
            <br />
            in West Bengal
          </h2>

          <div className="flex items-center justify-center sm:justify-start gap-1 mb-4">
            <div className="w-2 h-1.5 bg-yellow-400 rounded-full" />
            <div className="w-1 h-1.5 bg-yellow-400 rounded-full" />
            <div className="w-3 h-1.5 bg-yellow-400 rounded-full" />
            <div className="w-24 sm:w-36 h-1.5 bg-yellow-400 rounded-full" />
          </div>

          <p className="text-sm md:text-base text-gray-300 font-poppins leading-relaxed max-w-lg mx-auto sm:mx-0">
            Rice millers in West Bengal face many obstacles that hamper their
            impact and success in the industry.
          </p>
        </div>

        {/* Card-based Carousel */}
        <div className="flex-1 flex flex-col">
          {/* Main Card */}
          <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-6 border-2 border-yellow-400">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ x: direction === "next" ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === "next" ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full relative"
              >
                <Image
                  src={`/assets/${slides[currentIndex].img}.jpg`}
                  alt="Rice Field"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="flex items-center gap-4 bg-gradient-to-r from-[#16672B] to-[#242424] rounded-lg p-4 border border-white/20">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-elmessiri flex-shrink-0">
                      {currentIndex + 1}
                    </span>
                    <p className="text-white font-elmessiri text-sm sm:text-base md:text-lg leading-snug">
                      {slides[currentIndex].text}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={prevSlideSimple}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            >
              <Icon icon="mdi:chevron-left" width="24" height="24" />
            </button>
            <button
              onClick={nextSlideSimple}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            >
              <Icon icon="mdi:chevron-right" width="24" height="24" />
            </button>
          </div>

          {/* Thumbnail indicators */}
          <div className="flex justify-center gap-2 mb-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? "next" : "prev");
                  setCurrentIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? "w-8 bg-yellow-400" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Thumbnail images */}
          <div className="flex gap-3 overflow-x-auto pb-2 justify-center">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? "next" : "prev");
                  setCurrentIndex(i);
                }}
                className={`flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
                  currentIndex === i
                    ? "ring-2 ring-yellow-400 opacity-100"
                    : "opacity-60 hover:opacity-80"
                }`}
              >
                <Image
                  src={`/assets/${slide.img}.jpg`}
                  alt={`thumb-${i + 1}`}
                  width={80}
                  height={80}
                  className="object-cover w-16 h-16 sm:w-20 sm:h-20"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout (>= 1024px) */}
      <div className="hidden lg:flex w-full p-8 lg:p-10 xl:p-12 2xl:p-16 gap-6 lg:gap-8 xl:gap-8 2xl:gap-12">
        {/* Left Panel */}
        <div className="flex-[1.3] flex flex-col justify-between">
          {/* Header Section */}
          <div className="px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 lg:py-10 xl:py-10 2xl:py-12">
            <h2 className="text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-semibold leading-snug ml-2 font-elmessiri mb-6">
              Challenges faced by Rice Mills
              <br />
              in West Bengal
            </h2>

            <div className="flex items-center gap-1 mb-6">
              <div className="w-2 h-1.5 bg-yellow-400 rounded-full" />
              <div className="w-1 h-1.5 bg-yellow-400 rounded-full" />
              <div className="w-3 h-1.5 bg-yellow-400 rounded-full" />
              <div className="w-36 lg:w-40 xl:w-48 2xl:w-56 h-1.5 bg-yellow-400 rounded-full" />
            </div>

            <p className="text-sm lg:text-base xl:text-base 2xl:text-lg max-w-md lg:max-w-lg xl:max-w-lg text-gray-300 font-poppins leading-relaxed">
              Rice millers in West Bengal face many obstacles that hamper their
              impact and success in the industry.
            </p>
          </div>

          {/* Thumbnails Section */}
          <div className="h-[220px] lg:h-[230px] xl:h-[260px] 2xl:h-[300px] mb-32 lg:mb-12 xl:mb-12 2xl:mb-[50px] bg-[#23433E] rounded-xl p-6 lg:p-7 xl:p-8 2xl:p-10 flex items-center relative overflow-hidden lg:left-8 xl:left-7 2xl:left-3">
            <div className="flex gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 w-full flex-row-reverse">
              <AnimatePresence initial={false}>
                {remainingThumbnails.map((slide) => (
                  <motion.div
                    key={slide.index}
                    layout
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => goToSlide(slide.index)}
                    className="cursor-pointer hover:scale-105 transition-transform"
                  >
                    <Image
                      src={`/assets/${slide.img}.jpg`}
                      alt={`thumb-${slide.index + 1}`}
                      width={160}
                      height={160}
                      className="rounded-xl object-cover w-36 h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 2xl:w-52 2xl:h-52"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute bottom-0 left-6 lg:left-7 xl:left-8 2xl:left-10 flex items-center gap-3 z-20 p-1">
              {/* Dots */}
              <div className="flex gap-1">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentIndex === i
                        ? "w-8 bg-[#FFFFFF]"
                        : "w-2 bg-[#FFFFFF]"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center ml-4 bg-[#1b3a36] rounded-full">
                <button
                  onClick={prevSlide}
                  disabled={history.length === 0}
                  className={`p-1.5 lg:p-2 xl:p-2 rounded-full transition-colors ${
                    history.length === 0
                      ? "text-gray-600 cursor-not-allowed"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  <Icon
                    icon="mdi:chevron-left"
                    width="16"
                    height="16"
                    className="lg:w-5 lg:h-5 xl:w-5 xl:h-5"
                  />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={
                    slides.filter(
                      (_, i) =>
                        i !== currentIndex && !displayedIndexes.includes(i)
                    ).length === 0
                  }
                  className={`p-1.5 lg:p-2 xl:p-2 rounded-full transition-colors ${
                    slides.filter(
                      (_, i) =>
                        i !== currentIndex && !displayedIndexes.includes(i)
                    ).length === 0
                      ? "text-gray-600 cursor-not-allowed"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  <Icon
                    icon="mdi:chevron-right"
                    width="16"
                    height="16"
                    className="lg:w-5 lg:h-5 xl:w-5 xl:h-5"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Main Image Section */}
        <div className="flex-1 h-[550px] lg:h-[600px] xl:h-[650px] 2xl:h-[750px] relative lg:right-16 xl:right-20 2xl:right-32">
          <svg
            viewBox="0 0 1000 1000"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <clipPath id="notchedClip" clipPathUnits="userSpaceOnUse">
                <path
                  d="
                    M 40,2
                    H 960
                    Q 980,2 980,22
                    V 960
                    Q 980,980 960,980
                    H 40
                    Q 20,980 20,960
                    V 902
                    Q 20,886 36,886
                    H 118
                    Q 130,886 130,874
                    V 558
                    Q 130,546 118,546
                    H 36
                    Q 20,546 20,530
                    V 22
                    Q 20,2 40,2
                    Z
                  "
                />
              </clipPath>
            </defs>

            <foreignObject
              x="0"
              y="0"
              width="1000"
              height="1000"
              clipPath="url(#notchedClip)"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentIndex}
                  initial={{ x: direction === "next" ? 300 : -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction === "next" ? -300 : 300, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src={`/assets/${slides[currentIndex].img}.jpg`}
                    alt="Rice Field"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </foreignObject>

            <path
              d="
                M 40,2
                H 960
                Q 980,2 980,22
                V 960
                Q 980,980 960,980
                H 40
                Q 20,980 20,960
                V 902
                Q 20,886 36,886
                H 118
                Q 130,886 130,874
                V 558
                Q 130,546 118,546
                H 36
                Q 20,546 20,530
                V 22
                Q 20,2 40,2
                Z
              "
              fill="none"
              stroke="#FFD700"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
              shapeRendering="geometricPrecision"
            />
          </svg>

          {/* Desktop Text Overlay */}
          <div
            className="absolute bottom-20 lg:bottom-24 xl:bottom-28 2xl:bottom-32 left-20 lg:left-24 xl:left-24 2xl:left-24 z-20 flex items-stretch rounded-md overflow-hidden lg:h-[90px] lg:w-[280px] xl:h-[100px] xl:w-[440px] 2xl:h-[120px] 2xl:w-[470px]"
            style={{
              height: "90px",
              width: "420 px",
              background: "linear-gradient(to right, #16672B 0%, #242424 150%)",
              borderTopRightRadius: "12px",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 -1px 0 rgba(255,255,255,0.3) inset",
            }}
          >
            <div className="px-4 lg:px-5 xl:px-6 2xl:px-8 py-3 lg:py-3 xl:py-4 2xl:py-6 flex items-center justify-center bg-[#16672B] relative">
              <span className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white font-elmessiri z-10">
                {currentIndex + 1}
              </span>
              <div
                className="absolute top-3 bottom-3 right-0 w-[2px]"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.0))",
                }}
              />
            </div>
            <div className="pl-4 lg:pl-5 xl:pl-6 2xl:pl-8 pr-6 lg:pr-7 xl:pr-8 2xl:pr-10 flex items-center">
              <p className="text-white font-elmessiri text-lg lg:text-lg xl:text-xl 2xl:text-2xl leading-snug">
                {slides[currentIndex].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiceMillsChallenges;
