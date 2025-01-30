import React from "react";

export default function FeaturesPlanet() {
    return (
      <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
              <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
                Features, Innovation and Uniquness of our solution.
              </h2>
            </div>
            {/* Planet */}
            <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
              <div className="text-center">
                
              </div>
            </div>
            {/* Grid */}
            <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
              <article>
                <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                  <svg
                    className="fill-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                  >
                    <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                  </svg>
                  <span>Completely Running on Frontend</span>
                </h3>
                <p className="text-[15px] text-gray-400">
                Operates entirely within the browser, eliminating the need for backend servers. This ensures low latency, reduces infrastructure costs, and improves response times for users.
                </p>
              </article>
              <article>
                <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                  <svg
                    className="fill-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                  >
                    <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                  </svg>
                  <span>Model Size Less than 5 MB</span>
                </h3>
                <p className="text-[15px] text-gray-400">
                A compact model under 5 MB enables rapid loading, reduces bandwidth usage, and supports efficient performance across various devices, even those with limited resources.
                </p>
              </article>
              <article>
                <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                  <svg
                    className="fill-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                  >
                    <path
                      d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z"
                      opacity=".3"
                    />
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
                  </svg>
                  <span>Prediction Time Less than 300 ms</span>
                </h3>
                <p className="text-[15px] text-gray-400">
                Optimized for speed, the model delivers predictions in under 300 milliseconds, offering a smooth, real-time experience that feels instantaneous to the user.
                </p>
              </article>
              <article>
                <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                  <svg
                    className="fill-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                  >
                    <path d="M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm6 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1ZM1 1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H1Z" />
                  </svg>
                  <span>Cross Browser Functionality</span>
                </h3>
                <p className="text-[15px] text-gray-400">
                Fully compatible with all major browsers including Chrome, Firefox, Safari, and Edge, providing a consistent and reliable experience regardless of the user’s preferred platform.
                </p>
              </article>
              <article>
                <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                  <svg
                    className="fill-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                  >
                    <path d="M10.284.33a1 1 0 1 0-.574 1.917 6.049 6.049 0 0 1 2.417 1.395A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33ZM6.288 2.248A1 1 0 0 0 5.718.33 8.036 8.036 0 0 0 2.5 2.187a1 1 0 0 0 1.372 1.455 6.036 6.036 0 0 1 2.415-1.395ZM1.42 5.401a1 1 0 0 1 .742 1.204 6.025 6.025 0 0 0 0 2.79 1 1 0 0 1-1.946.462 8.026 8.026 0 0 1 0-3.714A1 1 0 0 1 1.421 5.4Zm2.452 6.957A1 1 0 0 0 2.5 13.812a8.036 8.036 0 0 0 3.216 1.857 1 1 0 0 0 .574-1.916 6.044 6.044 0 0 1-2.417-1.395Zm9.668.04a1 1 0 0 1-.041 1.414 8.033 8.033 0 0 1-3.217 1.857 1 1 0 1 1-.571-1.917 6.035 6.035 0 0 0 2.415-1.395 1 1 0 0 1 1.414.042Zm2.242-6.255a1 1 0 1 0-1.946.462 6.03 6.03 0 0 1 0 2.79 1 1 0 1 0 1.946.462 8.022 8.022 0 0 0 0-3.714Z" />
                  </svg>
                  <span>Easily Deployable</span>
                </h3>
                <p className="text-[15px] text-gray-400">
                Designed for straightforward deployment across different environments, whether on static web hosts, content delivery networks, or integrated within existing applications with minimal configuration.
                </p>
              </article>
              <article>
                <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                  <svg
                    className="fill-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                  >
                    <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                  </svg>
                  <span>User Privacy</span>
                </h3>
                <p className="text-[15px] text-gray-400">
                All processing occurs locally on the user’s device, ensuring that no personal data is sent to external servers, thereby maintaining user privacy and data security.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
  