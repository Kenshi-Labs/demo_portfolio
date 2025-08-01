"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#0d2824] flex items-center justify-center overflow-x-hidden pb-4 sm:pb-16 md:pb-2 lg:pb-4 xl:pb-1 2xl:pb-0 pt-4 sm:pt-12 md:pt-8 lg:pt-10 xl:pt-14 2xl:-mt-20">
      <div className="relative w-full h-full max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-2 overflow-x-hidden">

        {/* Custom CSS for 1440px breakpoint */}
        <style jsx>{`
          .desktop-layout {
            display: none;
          }
          .responsive-layout {
            display: block;
          }
          .mobile-layout {
            display: none;
          }

          @media (max-width: 767px) {
            .mobile-layout {
              display: block;
            }
            .responsive-layout {
              display: none;
            }
          }

          @media (min-width: 1440px) {
            .desktop-layout {
              display: block;
            }
            .responsive-layout {
              display: none;
            }
          }
        `}</style>

        {/* SVG CLIP-PATH for desktop */}
        <svg width="0" height="0">
          <defs>
            <clipPath id="roundedLCut" clipPathUnits="objectBoundingBox">
              <path
                d="
                  M0.02,0
                  Q0,0 0,0.02
                  V0.98
                  Q0,1 0.02,1
                  H0.75
                  Q0.77,1 0.77,0.98
                  V0.80
                  Q0.77,0.75 0.82,0.75
                  H0.96
                  Q1,0.75 1,0.71
                  V0.02
                  Q1,0 0.98,0
                  H0.02
                  Z
                "
              />
            </clipPath>
          </defs>
        </svg>

        {/* DESKTOP LAYOUT (1440px and above) */}
        <div className="desktop-layout relative w-full h-[500px] overflow-hidden">
          {/* IMAGES CONTAINER */}
          <div className="absolute inset-0">
            {/* Sun Background Image */}
            <div className="absolute z-20 -top-[25%] left-[80%] w-[450px] h-[450px] transform -translate-x-1/2 transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src="https://brma-web.smepulse.in/assets/sun.png"
                alt="Sun"
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Karnataka Map */}
            <div className="absolute z-20 -top-[1%] left-[90%] w-[400px] h-[400px] opacity-40 transform -translate-x-1/2 transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src="https://brma-web.smepulse.in/assets/karnataka_map.png"
                alt="Map"
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Birds */}
            <div className="absolute z-20 top-[-6%] left-[88%] w-[500px] h-[500px] transform -translate-x-1/2 transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src="https://brma-web.smepulse.in/assets/group_birds.png"
                alt="Bird"
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>

            {/* FLOATING RECTANGLE IMAGE BOX - FIXED POSITIONING */}
            <div className="absolute z-30 top-[384px] -right-[2%] w-[63%] h-[22%] rounded-3xl overflow-hidden flex">
              {/* LEFT IMAGE SECTION */}
              <div className="w-1/2 relative flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src="https://brma-web.smepulse.in/assets/rice_field.png"
                  alt="Field Background"
                  width={400}
                  height={400}
                  className="w-full h-[540px] object-cover object-right"
                />
                <div className="absolute bottom-[4%] left-[-8%] w-[45%] h-[45%] z-10 transition-transform duration-300 ease-in-out hover:scale-105">
                  <Image
                    src="https://brma-web.smepulse.in/assets/bag.png"
                    alt="Overlay Icon"
                    width={110}
                    height={110}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* RIGHT IMAGE SECTION */}
              <div className="w-1/2 bg-[#23433E] relative overflow-hidden flex items-center justify-center">
                {/* Decorative Ring */}
                <div className="absolute -bottom-[30%] -right-[5%] w-[75%] h-[129%] z-0 transition-transform duration-300 ease-in-out hover:scale-105">
                  <Image
                    src="https://brma-web.smepulse.in/assets/ring.png"
                    alt="Decorative Ring"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain object-bottom-right"
                  />
                </div>

                {/* Ox Image */}
                <div className="absolute bottom-[-15%] right-[-2%] w-[55%] h-[100%] z-10 transition-transform duration-300 ease-in-out hover:scale-105">
                  <Image
                    src="https://brma-web.smepulse.in/assets/ox.png"
                    alt="Overlay Icon Right"
                    width={160}
                    height={160}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* LIFTING CROP IMAGE */}
            <div className="absolute z-40 top-[235px] left-[50.2%] w-[200px] h-[300px] transform -translate-x-1/2 transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src="https://brma-web.smepulse.in/assets/lifting_crop.png"
                alt="Lifting Crop"
                width={200}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>

            {/* MAIN CENTER IMAGES */}
            <div className="absolute z-50 bottom-[-33px] right-[240px] w-[380px] h-[450px] transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src="https://brma-web.smepulse.in/assets/farmer.png"
                alt="Main Farmer"
                width={400}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Crop */}
            <div className="absolute z-40 bottom-[-30px] right-[185px] w-[350px] h-[500px] transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src="https://brma-web.smepulse.in/assets/crop.png"
                alt="Crop"
                width={350}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* LEFT-SIDE CLIPPED CARD */}
          <div
            className="absolute top-0 left-0 z-20 bg-[#cd8e4e] text-white w-[50%] h-full p-8 shadow-lg"
            style={{
              clipPath: "url(#roundedLCut)",
              borderRadius: "24px",
            }}
          >
            <h1 className="text-4xl font-serif font-medium text-[#163A35] leading-snug font-elmessiri">
              Bengal Rice Mills Association | <br /> Empowering Rice Millers
            </h1>

            <p className="mt-6 text-sm leading-relaxed pr-4 font-poppins text-[#FFFFFF]">
              Bengal Rice Mills Association (BRMA) represents the rice mills in
              West Bengal, serving as the collective voice of rice millers
              across the region. We unite industry leaders to drive growth,
              ensure food security to maintain the highest quality standards.
            </p>

            <p className="mt-4 text-sm leading-relaxed pr-4 font-poppins text-[#FFFFFF]">
              Rice millers face challenges like rising costs, supply chain
              inefficiencies, and labor <br /> shortages. BRMA bridges these
              gaps with strategic solutions, optimizing procurement,
              <br /> reducing energy costs, connecting skilled workers, and
              simplifying policy navigation.
            </p>

            <p className="mt-4 text-sm leading-relaxed pr-4 font-poppins text-[#FFFFFF]">
              Our goal is to empower rice millers in West Bengal with the tools,
              knowledge, <br /> and network they need for long-term success.
              Together, we contribute <br /> to  the economy of the state to
              build a resilient, future-ready rice <br /> milling  industry in
              West Bengal, one grain at a time.
            </p>
          </div>
        </div>

        {/* RESPONSIVE LAYOUT (768px to 1439px) */}
        <div className="responsive-layout overflow-hidden">
          {/* RECTANGULAR CARD */}
          <div className="bg-[#cd8e4e] rounded-2xl p-6 sm:p-8 lg:p-10 mb-4 shadow-lg">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-[#163A35] leading-tight font-elmessiri mb-4 sm:mb-6">
              Bengal Rice Mills Association | Empowering Rice Millers
            </h1>

            <div className="text-white font-poppins space-y-4">
              <p className="text-sm sm:text-base leading-relaxed">
                Bengal Rice Mills Association (BRMA) represents the rice mills
                in West Bengal, serving as the collective voice of rice millers
                across the region. We unite industry leaders to drive growth,
                ensure food security to maintain the highest quality standards.
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                Rice millers face challenges like rising costs, supply chain
                inefficiencies, and labor shortages. BRMA bridges these gaps
                with strategic solutions, optimizing procurement, reducing
                energy costs, connecting skilled workers, and simplifying policy
                navigation.
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                Our goal is to empower rice millers in West Bengal with the
                tools, knowledge, and network they need for long-term success.
                Together, we contribute to the economy of the state to build a
                resilient, future-ready rice milling industry in West Bengal,
                one grain at a time.
              </p>
            </div>
          </div>

          {/* IMAGES SECTION */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl ">
            {/* Background Images */}
            <div className="absolute inset-0">
              {/* Sun Background Image */}
              <div className="absolute z-10 top-[-10%] sm:top-[-20%] lg:top-[-18%] right-[15%] sm:right-[8%] lg:right-[15%] w-[200px] h-[200px] sm:w-[400px] sm:h-[450px] lg:w-[450px] lg:h-[550px] transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src="https://brma-web.smepulse.in/assets/sun.png"
                  alt="Sun"
                  width={350}
                  height={350}
                  className="w-full h-full object-contain opacity-80"
                />
              </div>

              {/* Karnataka Map */}
              <div className="absolute z-10 top-[0%] sm:top-[1%] lg:top-[0%] right-[3%] sm:right-[-5%] lg:right-[1%] w-[150px] h-[150px] sm:w-[300px] sm:h-[350px] lg:w-[380px] lg:h-[480px] opacity-25 transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src="https://brma-web.smepulse.in/assets/karnataka_map.png"
                  alt="Map"
                  width={250}
                  height={250}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Birds */}
              <div className="absolute z-10 top-[0%] sm:top-[2%] lg:top-[2%] right-[5%] sm:right-[1%] lg:right-[3%] w-[120px] h-[120px] sm:w-[350px] sm:h-[400px] lg:w-[380px] lg:h-[480px] transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src="https://brma-web.smepulse.in/assets/group_birds.png"
                  alt="Bird"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Main Content Images */}
            <div className="absolute inset-0">
              {/* LIFTING CROP IMAGE */}
              <div className="absolute z-30 top-[46%] sm:top-[35%] lg:top-[46%] left-[10%] w-[80px] h-[120px] sm:w-[230px] sm:h-[280px] lg:w-[250px] lg:h-[300px] transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src="https://brma-web.smepulse.in/assets/lifting_crop.png"
                  alt="Lifting Crop"
                  width={130}
                  height={195}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* MAIN FARMER IMAGE */}
              <div className="absolute z-40 bottom-[-25px] sm:bottom-[5px] lg:bottom-[-33px] left-[30%] w-[180px] h-[300px] sm:w-[340px] sm:h-[400px] lg:w-[400px] lg:h-[480px] transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src="https://brma-web.smepulse.in/assets/farmer.png"
                  alt="Main Farmer"
                  width={280}
                  height={350}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Crop */}
              <div className="absolute z-30 bottom-[40px] sm:bottom-[60px] lg:bottom-[35px] right-[27%] sm:right-[21%] lg:right-[27%] w-[160px] h-[230px] sm:w-[220px] sm:h-[320px] lg:w-[290px] lg:h-[400px] transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src="https://brma-web.smepulse.in/assets/crop.png"
                  alt="Crop"
                  width={250}
                  height={360}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* FLOATING RECTANGLE IMAGE BOX - RESPONSIVE FIXED */}
              <div className="absolute z-0 bottom-[8%] lg:bottom-[2%] lg:right-[0%] w-[40%] sm:w-[100%] lg:w-[100%] h-[120px] sm:h-[120px] lg:h-[140px] rounded-lg sm:rounded-xl overflow-hidden flex shadow-lg">
                {/* LEFT IMAGE SECTION */}
                <div className="w-1/2 relative flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105">
                  <Image
                    src="https://brma-web.smepulse.in/assets/rice_field.png"
                    alt="Field Background"
                    width={200}
                    height={200}
                    className="w-full h-[600px] object-cover object-right"
                  />
                  <div className="absolute bottom-[5%] left-[3%] w-[35%] sm:w-[30%] lg:w-[35%] h-[40%] sm:h-[45%] lg:h-[50%] z-10 transition-transform duration-300 ease-in-out hover:scale-105">
                    <Image
                      src="https://brma-web.smepulse.in/assets/bag.png"
                      alt="Overlay Icon"
                      width={100}
                      height={100}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* RIGHT IMAGE SECTION */}
                <div className="w-1/2 bg-[#23433E] relative overflow-hidden flex items-center justify-center">
                  {/* Decorative Ring */}
                  <div className="absolute -bottom-[10%] -right-[8%] w-[70%] sm:w-[65%] lg:w-[60%] h-[110%] sm:h-[115%] lg:h-[115%] z-0 transition-transform duration-300 ease-in-out hover:scale-105">
                    <Image
                      src="https://brma-web.smepulse.in/assets/ring.png"
                      alt="Decorative Ring"
                      width={100}
                      height={100}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Ox Image */}
                  <div className="absolute bottom-[-5%] right-[-2%] w-[55%] sm:w-[50%] lg:w-[50%] h-[80%] sm:h-[85%] lg:h-[90%] z-10 transition-transform duration-300 ease-in-out hover:scale-105">
                    <Image
                      src="https://brma-web.smepulse.in/assets/ox.png"
                      alt="Overlay Icon Right"
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT (Below 768px) */}
        <div className="mobile-layout overflow-hidden">
          {/* RECTANGULAR CARD */}
          <div className="bg-[#cd8e4e] rounded-2xl p-6 mb-4 shadow-lg">
            <h1 className="text-xl font-serif font-medium text-[#163A35] leading-tight font-elmessiri mb-4">
              Bengal Rice Mills Association | Empowering Rice Millers
            </h1>

            <div className="text-white font-poppins space-y-4">
              <p className="text-sm leading-relaxed">
                Bengal Rice Mills Association (BRMA) represents the rice mills
                in West Bengal, serving as the collective voice of rice millers
                across the region. We unite industry leaders to drive growth,
                ensure food security to maintain the highest quality standards.
              </p>

              <p className="text-sm leading-relaxed">
                Rice millers face challenges like rising costs, supply chain
                inefficiencies, and labor shortages. BRMA bridges these gaps
                with strategic solutions, optimizing procurement, reducing
                energy costs, connecting skilled workers, and simplifying policy
                navigation.
              </p>

              <p className="text-sm leading-relaxed">
                Our goal is to empower rice millers in West Bengal with the
                tools, knowledge, and network they need for long-term success.
                Together, we contribute to the economy of the state to build a
                resilient, future-ready rice milling industry in West Bengal,
                one grain at a time.
              </p>
            </div>
          </div>

          {/* SINGLE MOBILE IMAGE */}
          <div className="relative h-[400px] overflow-hidden rounded-2xl">
            <Image
              src="https://brma-web.smepulse.in/assets/component.png"
              alt="Bengal Rice Mills Association - Farmer with Rice"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}