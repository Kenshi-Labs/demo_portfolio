"use client";
import Image from "next/image";

export default function MandalaBackground() {
  return (
    <section className="relative w-full min-h-[60vh] bg-[#0d2824] overflow-hidden py-8 px-4 md:px-8 pb-4 sm:pb-16 md:pb-2 lg:pb-4 xl:pb-4 2xl:pb-2 pt-4 sm:pt-12 md:pt-2 lg:pt-3 xl:pt-4 2xl:pt-0">
      <div className="relative max-w-[1450px] h-full mx-auto">
        {/* Right Large Mandala - Hidden on mobile */}
        <Image
          src="https://brma-web.smepulse.in/assets/manadala.png"
          alt="Right Mandala"
          width={600}
          height={600}
          className="absolute right-8 top-64 -translate-y-1/2 opacity-15 pointer-events-none select-none hidden lg:block xl:w-[550px] xl:h-[550px] lg:w-[350px] lg:h-[350px]"
        />

        {/* Bottom Left Small Mandala - Hidden on mobile */}
        <Image
          src="https://brma-web.smepulse.in/assets/manadala.png"
          alt="Left Bottom Mandala"
          width={250}
          height={250}
          className="absolute bottom-0 -left-12 opacity-15 pointer-events-none select-none hidden md:block lg:w-[200px] lg:h-[200px] md:w-[120px] md:h-[120px]"
        />

        {/* Main Content Container */}
        <div className="relative z-10 flex items-center justify-center min-h-[80vh]">
          {/* Desktop Layout (1280px+) */}
          <div className="hidden xl:block relative w-[1450px] h-[480px] rounded-[28px] overflow-hidden">
            <Image
              src="https://brma-web.smepulse.in/assets/mask_group_2.png"
              alt="Notched Field"
              fill
              className="object-contain"
              priority
            />

            {/* Desktop Content */}
            <div className="absolute top-[55px] left-[20px] text-white max-w-[600px]">
              <h2 className="text-[42px] leading-[48px] font-medium font-elmessiri">
                Join BRMA Today: Strength in
                <br />
                Unity, Power in Legacy!
              </h2>
              <p className="mt-3 text-[#FFFFFF] text-sm font-poppins leading-relaxed">
                Your grievance matters. BRMA has been the
                <br />
                voice of rice mills since 1944. Write to us.
              </p>
            </div>

            <div className="absolute top-[100px] xl:top-[40px] 2xl:top-[25px] right-[35px] xl:right-[22px] 2xl:right-[35px] w-[450px] h-[60px] xl:w-[450px] xl:h-[60px] 2xl:w-[450px] 2xl:h-[70px] bg-black/20 rounded-[16px] xl:rounded-[18px] 2xl:rounded-[20px] border border-white/20 flex items-center px-6 xl:px-8 2xl:px-10 text-white text-sm xl:text-base 2xl:text-lg">
  <input
    type="text"
    placeholder="Your Name"
    className="bg-transparent outline-none w-full placeholder-white font-poppins"
  />
</div>

<div className="absolute top-[210px] xl:top-[140px] 2xl:top-[140px] left-[580px] xl:left-[540px] 2xl:left-[570px] w-[450px] h-[60px] xl:w-[450px] xl:h-[60px] 2xl:w-[450px] 2xl:h-[70px] bg-black/30 rounded-[16px] xl:rounded-[18px] 2xl:rounded-[20px] border border-white/20 flex items-center px-6 xl:px-8 2xl:px-10 text-white text-sm xl:text-base 2xl:text-lg">
  <input
    type="text"
    placeholder="Your Email"
    className="bg-transparent outline-none w-full placeholder-white font-poppins"
  />
</div>

<div className="absolute bottom-[80px] xl:bottom-[30px] 2xl:bottom-[20px] left-[35px] xl:left-[12px] 2xl:left-[15px] w-[1000px] h-[200px] xl:w-[1000px] xl:h-[200px] 2xl:w-[1050px] 2xl:h-[200px] bg-black/30 backdrop-blur-xs rounded-[20px] xl:rounded-[24px] 2xl:rounded-[28px] border border-white/20 flex items-start p-5 xl:p-6 2xl:p-8 text-white text-sm xl:text-base 2xl:text-lg">
  <textarea
    placeholder="Description"
    className="bg-transparent outline-none w-full h-full resize-none placeholder-white font-poppins"
  />
</div>

            <div className="absolute bottom-[110px] right-[70px] flex flex-col items-start gap-3">
              <button className="bg-[#FFD100] text-black font-medium rounded-full px-12 py-[12px] text-lg flex items-center gap-3 font-poppins leading-none">
                <span className="mt-[2px]">Submit</span>
                <span className="mt-[2px]">
                  <svg
                    width="50"
                    height="10"
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
              <p className="text-white/70 text-sm font-poppins w-[200px] leading-snug ml-6">
                and we will get back to you <br /> within 6–7 business days.
              </p>
            </div>
          </div>

          {/* Laptop Layout (1024px - 1279px) */}
          <div className="hidden lg:block xl:hidden w-full max-w-2xl mx-auto">
              <div className="text-white text-center mb-6">
                <h2 className="text-3xl lg:text-4xl leading-tight font-medium font-elmessiri mb-3">
                  Join BRMA Today: Strength in Unity, Power in Legacy!
                </h2>
                <p className="text-white/90 text-sm font-poppins leading-relaxed max-w-lg mx-auto">
                  Your grievance matters. BRMA has been the voice of rice mills since 1944. Write to us.
                </p>
              </div>
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-11 bg-black/10 rounded-2xl border border-white/20 px-4 text-white placeholder-white/70 font-poppins outline-none focus:border-white/40"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full h-11 bg-black/10 rounded-2xl border border-white/20 px-4 text-white placeholder-white/70 font-poppins outline-none focus:border-white/40"
                />
                <textarea
                  placeholder="Description"
                  rows={4}
                  className="w-full bg-black/10 backdrop-blur-xs rounded-2xl border border-white/20 p-4 text-white placeholder-white/70 font-poppins outline-none resize-none focus:border-white/40"
                />
                
                <div className="text-center pt-1">
                  <button className="bg-[#FFD100] text-black font-medium rounded-full px-10 py-3 text-base flex items-center gap-3 font-poppins mx-auto mb-3">
                    <span>Submit</span>
                    <svg width="35" height="8" viewBox="0 0 60 12" fill="none">
                      <path d="M0 6H55M55 6L50 1M55 6L50 11" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <p className="text-white/70 text-xs font-poppins leading-snug">
                    and we will get back to you<br />within 6–7 business days.
                  </p>
                </div>
              </div>
          </div>

          {/* Tablet Layout (768px - 1023px) */}
          <div className="hidden md:block lg:hidden w-full max-w-2xl mx-auto">
              <div className="text-white text-center mb-6">
                <h2 className="text-2xl md:text-3xl leading-tight font-medium font-elmessiri mb-3">
                  Join BRMA Today:<br />Strength in Unity, Power in Legacy!
                </h2>
                <p className="text-white/90 text-sm font-poppins leading-relaxed max-w-md mx-auto">
                  Your grievance matters. BRMA has been the voice of rice mills since 1944. Write to us.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-11 bg-black/10 rounded-2xl border border-white/20 px-4 text-white placeholder-white/70 font-poppins outline-none focus:border-white/40"
                  />
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="h-11 bg-black/10 rounded-2xl border border-white/20 px-4 text-white placeholder-white/70 font-poppins outline-none focus:border-white/40"
                  />
                </div>
                
                <textarea
                  placeholder="Description"
                  rows={4}
                  className="w-full bg-black/10 backdrop-blur-xs rounded-2xl border border-white/20 p-4 text-white placeholder-white/70 font-poppins outline-none resize-none focus:border-white/40"
                />
                
                <div className="text-center">
                  <button className="bg-[#FFD100] text-black font-medium rounded-full px-8 py-3 text-base flex items-center gap-2 font-poppins mx-auto mb-3">
                    <span>Submit</span>
                    <svg width="35" height="8" viewBox="0 0 60 12" fill="none">
                      <path d="M0 6H55M55 6L50 1M55 6L50 11" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <p className="text-white/70 text-xs font-poppins">
                    and we will get back to you within 6–7 business days.
                  </p>
                </div>
              </div>
          </div>

          {/* Mobile Layout (< 768px) */}
          <div className="block md:hidden w-full max-w-sm mx-auto">
              <div className="text-white text-center mb-5">
                <h2 className="text-xl leading-tight font-medium font-elmessiri mb-3">
                  Join BRMA Today:<br />Strength in Unity,<br />Power in Legacy!
                </h2>
                <p className="text-white/90 text-sm font-poppins leading-relaxed">
                  Your grievance matters. BRMA has been the voice of rice mills since 1944. Write to us.
                </p>
              </div>
              
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-11 bg-black/10 rounded-2xl border border-white/20 px-4 text-white placeholder-white/70 font-poppins outline-none focus:border-white/40"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full h-11 bg-black/10 rounded-2xl border border-white/20 px-4 text-white placeholder-white/70 font-poppins outline-none focus:border-white/40"
                />
                <textarea
                  placeholder="Description"
                  rows={4}
                  className="w-full bg-black/10 backdrop-blur-xs rounded-2xl border border-white/20 p-4 text-white placeholder-white/70 font-poppins outline-none resize-none focus:border-white/40"
                />
                
                <div className="text-center pt-1">
                  <button className="bg-[#FFD100] text-black font-medium rounded-full px-6 py-2.5 text-sm flex items-center gap-2 font-poppins mx-auto mb-2">
                    <span>Submit</span>
                    <svg width="25" height="6" viewBox="0 0 60 12" fill="none">
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