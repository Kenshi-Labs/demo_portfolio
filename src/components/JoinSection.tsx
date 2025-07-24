"use client";
import Image from "next/image";

export default function MandalaBackground() {
  return (
    <section className="relative w-full min-h-screen bg-[#0d2824] overflow-hidden py-4  px-4">
      <div className="relative max-w-7xl h-full mx-auto">
        {/* Right Large Mandala - Hidden on mobile */}
        <Image
          src="/assets/manadala.png"
          alt="Right Mandala"
          width={600}
          height={600}
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none select-none hidden lg:block xl:w-[600px] xl:h-[600px] lg:w-[400px] lg:h-[400px]"
        />

        {/* Bottom Left Small Mandala - Hidden on mobile */}
        <Image
          src="/assets/manadala.png"
          alt="Left Bottom Mandala"
          width={250}
          height={250}
          className="absolute bottom-44 -left-20 opacity-15 pointer-events-none select-none hidden md:block lg:w-[250px] lg:h-[250px] md:w-[150px] md:h-[150px]"
        />

        {/* Main Content Container */}
        <div className="relative z-10  flex items-center justify-center">
          {/* Desktop Layout (1280px+) */}
          <div className="hidden xl:block relative w-[1350px] h-[950px] rounded-[28px] overflow-hidden">
            <Image
              src="/assets/Mask_group_2.png"
              alt="Notched Field"
              fill
              className="object-contain"
              priority
            />

            {/* Desktop Content */}
            <div className="absolute top-[250px] left-[20px] text-white max-w-[650px]">
              <h2 className="text-[50px] leading-[58px] font-medium font-elmessiri">
                Join BRMA Today: Strength in
                <br />
                Unity, Power in Legacy!
              </h2>
              <p className="mt-4 text-[#FFFFFF] text-base font-poppins leading-relaxed">
                Your grievance matters. BRMA has been the
                <br />
                voice of rice mills since 1944. Write to us.
              </p>
            </div>

            <div className="absolute top-[280px] right-[15px] w-[420px] h-[55px] bg-black/20 rounded-[16px] border border-white/20 flex items-center px-6 text-white text-sm">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent outline-none w-full placeholder-white font-poppins"
              />
            </div>

            <div className="absolute top-[380px] left-[520px] w-[450px] h-[55px] bg-black/30 rounded-[16px] border border-white/20 flex items-center px-6 text-white text-sm">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent outline-none w-full placeholder-white font-poppins"
              />
            </div>

            <div className="absolute bottom-[280px] left-[6px] w-[940px] h-[185px] bg-black/30 backdrop-blur-xs rounded-[20px] border border-white/20 flex items-start p-6 text-white text-sm">
              <textarea
                placeholder="Description"
                className="bg-transparent outline-none w-full h-full resize-none placeholder-white font-poppins"
              />
            </div>

            <div className="absolute bottom-[330px] right-[30px] flex flex-col items-start gap-4">
              <button className="bg-[#FFD100] text-black font-medium rounded-full px-16 py-[16px] text-xl flex items-center gap-3 font-poppins leading-none">
                <span className="mt-[2px]">Submit</span>
                <span className="mt-[2px]">
                  <svg
                    width="60"
                    height="12"
                    viewBox="0 0 60 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6H55M55 6L50 1M55 6L50 11"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <p className="text-white/70 text-base font-poppins w-[220px] leading-snug ml-9">
                and we will get back to you <br /> within 6–7 business days.
              </p>
            </div>
          </div>

          {/* Laptop Layout (1024px - 1279px) */}
          <div className="hidden lg:block xl:hidden w-full max-w-2xl mx-auto">
              <div className="text-white text-center mb-8">
                <h2 className="text-3xl lg:text-4xl leading-tight font-medium font-elmessiri mb-4">
                  Join BRMA Today: Strength in Unity, Power in Legacy!
                </h2>
                <p className="text-white/90 text-base font-poppins leading-relaxed max-w-lg mx-auto">
                  Your grievance matters. BRMA has been the voice of rice mills since 1944. Write to us.
                </p>
              </div>
              
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-12 bg-black/10 rounded-2xl border border-white/20 px-4 text-white placeholder-white/70 font-poppins outline-none focus:border-white/40"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full h-12 bg-black/10 rounded-2xl border border-white/20 px-4 text-white placeholder-white/70 font-poppins outline-none focus:border-white/40"
                />
                <textarea
                  placeholder="Description"
                  rows={6}
                  className="w-full bg-black/10 backdrop-blur-xs rounded-2xl border border-white/20 p-4 text-white placeholder-white/70 font-poppins outline-none resize-none focus:border-white/40"
                />
                
                <div className="text-center pt-2">
                  <button className="bg-[#FFD100] text-black font-medium rounded-full px-12 py-4 text-lg flex items-center gap-3 font-poppins mx-auto mb-4">
                    <span>Submit</span>
                    <svg width="40" height="10" viewBox="0 0 60 12" fill="none">
                      <path d="M0 6H55M55 6L50 1M55 6L50 11" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <p className="text-white/70 text-sm font-poppins leading-snug">
                    and we will get back to you<br />within 6–7 business days.
                  </p>
                </div>
              </div>
          </div>

          {/* Tablet Layout (768px - 1023px) */}
          <div className="hidden md:block lg:hidden w-full max-w-3xl mx-auto">
              <div className="text-white text-center mb-8">
                <h2 className="text-2xl md:text-3xl leading-tight font-medium font-elmessiri mb-4">
                  Join BRMA Today:<br />Strength in Unity, Power in Legacy!
                </h2>
                <p className="text-white/90 text-sm md:text-base font-poppins leading-relaxed max-w-md mx-auto">
                  Your grievance matters. BRMA has been the voice of rice mills since 1944. Write to us.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-12 bg-black/10 rounded-2xl border border-white/20 px-4 text-white placeholder-white/70 font-poppins outline-none focus:border-white/40"
                  />
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="h-12 bg-black/10 rounded-2xl border border-white/20 px-4 text-white placeholder-white/70 font-poppins outline-none focus:border-white/40"
                  />
                </div>
                
                <textarea
                  placeholder="Description"
                  rows={6}
                  className="w-full bg-black/10 backdrop-blur-xs rounded-2xl border border-white/20 p-4 text-white placeholder-white/70 font-poppins outline-none resize-none focus:border-white/40"
                />
                
                <div className="text-center">
                  <button className="bg-[#FFD100] text-black font-medium rounded-full px-10 py-4 text-lg flex items-center gap-3 font-poppins mx-auto mb-4">
                    <span>Submit</span>
                    <svg width="40" height="10" viewBox="0 0 60 12" fill="none">
                      <path d="M0 6H55M55 6L50 1M55 6L50 11" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <p className="text-white/70 text-sm font-poppins">
                    and we will get back to you within 6–7 business days.
                  </p>
                </div>
              </div>
          </div>

          {/* Mobile Layout (< 768px) */}
          <div className="block md:hidden w-full max-w-sm mx-auto">
              <div className="text-white text-center mb-6">
                <h2 className="text-xl leading-tight font-medium font-elmessiri mb-4">
                  Join BRMA Today:<br />Strength in Unity,<br />Power in Legacy!
                </h2>
                <p className="text-white/90 text-sm font-poppins leading-relaxed">
                  Your grievance matters. BRMA has been the voice of rice mills since 1944. Write to us.
                </p>
              </div>
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-12 bg-black/10 rounded-2xl border border-white/20 px-4 text-white placeholder-white/70 font-poppins outline-none focus:border-white/40"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full h-12 bg-black/10 rounded-2xl border border-white/20 px-4 text-white placeholder-white/70 font-poppins outline-none focus:border-white/40"
                />
                <textarea
                  placeholder="Description"
                  rows={5}
                  className="w-full bg-black/10 backdrop-blur-xs rounded-2xl border border-white/20 p-4 text-white placeholder-white/70 font-poppins outline-none resize-none focus:border-white/40"
                />
                
                <div className="text-center pt-2">
                  <button className="bg-[#FFD100] text-black font-medium rounded-full px-8 py-3 text-base flex items-center gap-2 font-poppins mx-auto mb-3">
                    <span>Submit</span>
                    <svg width="30" height="8" viewBox="0 0 60 12" fill="none">
                      <path d="M0 6H55M55 6L50 1M55 6L50 11" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <p className="text-white/70 text-xs font-poppins leading-snug">
                    and we will get back to you<br />within 6–7 business days.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}