import React from "react";
import PageIllustration from "./PageIllustration.tsx";

export default function HeroHome() {
    return (
      <section className="relative">
        <PageIllustration />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            {/* Section header */}
            <div className="pb-12 text-center md:pb-16">
              <div
                className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
                data-aos="zoom-y-out"
              >
              </div>
              <h1
                className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >
                ML Based Human Detection<br className="max-lg:hidden" />
                Captcha System.
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-lg text-gray-700"
                  data-aos="zoom-y-out"
                  data-aos-delay={300}
                >
                  Its an advanced ML Based captcah system platform powered by AI that transforms captcha processing.
                </p>
                <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                  <div
                    className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                    data-aos="zoom-y-out"
                    data-aos-delay={450}
                  >
                    <a
                      className="btn group mb-4 w-full bg-gradient-to-t rounded-xl from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                      href="/passive-normal"
                    >
                      <span className="relative inline-flex items-center p-2">
                        Verify (Normal Users)
                      </span>
                    </a>
                    <a
                      className="btn group mb-4 w-full bg-gradient-to-t rounded-xl from-blue-600 ml-[3%] to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                      href="/passive-blind"
                    >
                      <span className="relative inline-flex items-center p-2 rounded-xl">
                        Verify (Blind Users)
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero image */}
            
  
            
          </div>
        </div>
      </section>
    );
  }
