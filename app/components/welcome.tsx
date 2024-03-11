export default function Welcome() {
  return (
    <>
      <div className="flex flex-col items-center justify-center  px-2rem md:px-[15rem]  dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] ">
        <div className="px-[2rem]">

          <h3 className="text-[24px]  md:text-4xl  py-[2rem] text-blue-500">
            Connect Instantly With A Professional Plumber
          </h3>

          <p className="mb-6 text-[16px] md:text-[20px] md:font-semibold text-slate-800 text-xl">
            We offer affordable, effective, and stress-free solutions to solve any plumbing related issues.

            Our Network of Professional Plumbers are experienced in all areas of plumbing, from repairs &
            installations, to emergency services.
          </p>
        
          <p className="mb-6 text-[16px] md:text-[19px] text-slate-600 text-xl  mt-6 ">
            <strong>Call Now to get in touch with a helpful local professional for an estimate, or with any questions.</strong> <br />
          </p>


















          <div className="grid grid-cols-1 md:grid-cols-3  gap-6 items-center py-9 mb-3 px-5">

            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-[1rem] p-px text-xs font-semibold leading-6 text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-[1rem] bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-[1rem] bg-zinc-950 py-4 px-4 ring-1 ring-white/10 ">
                <span className="text-[16px] mx-auto text-center">
                  Emergency Response
                </span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-[1rem] p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-[1rem] bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-[1rem] bg-zinc-950 py-4 px-2 ring-1 ring-white/10 ">
                <span className="text-[16px] mx-auto text-center">
                  Risk Free Quote
                </span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>

            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-[1rem] p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-[1rem] bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-[1rem] bg-zinc-950 py-4 px-8 ring-1 ring-white/10 ">
                <span className="text-[16px] mx-auto text-center">
                  24/7 Service
                </span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>

          </div>
        </div>
      </div>
    </>
  );
}
