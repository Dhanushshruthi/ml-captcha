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
                ML Based Face Liveness Detection<br className="max-lg:hidden" />
                captcha system.
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
            <div
              className="mx-auto max-w-3xl"
              data-aos="zoom-y-out"
              data-aos-delay={600}
            >
              <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                  <span className="text-[13px] font-medium text-white">
                    Team Wizzers
                  </span>
                </div>
                <div className="font-mono text-gray-500 [&_span]:opacity-0 flex flex-row gap-2">
  
                  <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
                      <iframe
                        src="https://docs.google.com/presentation/d/1jgqBtZwA-DtpQgMOnwpYNM_4X2tIa6U2/embed?start=false&loop=false&delayms=3000"
                        frameBorder="0"
                        width="100%"
                        height="100%"
                        allowFullScreen
                      >
                      </iframe>
                  </div>
  
                  </div>
              </div>
            </div>
  
            <div
              className="mx-auto max-w-3xl mt-10"
              data-aos="zoom-y-out"
              data-aos-delay={600}
            >
              <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                  <span className="text-[13px] font-medium text-white">
                    Demo Video
                  </span>
                </div>
                {/* <div className="font-mono text-gray-500 [&_span]:opacity-0 flex flex-row gap-2"> */}
  
                <div className="font-mono text-gray-500 [&_span]:opacity-0 flex flex-row gap-2">
                  <div className="w-[200%] h-[50vh]">
                    <iframe
                      src="https://www.youtube.com/embed/GPdHT4alMbU"
                      frameBorder="0"
                      width="100%"
                      height="100%"
                      allowFullScreen
                      title="YouTube video"
                    ></iframe>
                  {/* </div> */}
                  </div>

  
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
