"use client";

// components/OurStory.js

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "../globals.css";
import { useInView } from "react-intersection-observer";

export default function ProvenAds() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      className="grid grid-cols-1 md:grid-cols-2 w-full dark:bg-white bg-black  dark:bg-dot-black/[0.2] bg-dot-white/[0.2] custom-negative-z-index gap-2 pt-[4rem]   px-[1rem]"
    >
      {/* Left Section */}
      <motion.div
        className="container mx-auto md:mt-[5rem] h-[600px] w-[400px] rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/plumber/adertising.png" // the image file should be in the public folder
          alt="southflow marketing agency no contract no set up fee"
          width={300} // the original image width
          height={400} // the original image height
          layout="responsive" // this will make the image responsive
          quality={100}
          className="rounded-md " // this will reduce the image size and improve performance
        />
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: inView ? 0 : 200 }}
        transition={{
          duration: 2,
          delay: 1,
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className="w-full flex flex-col  items-center  md:pl-8 px-[.5rem] md:px-[2rem]"
      >
        <motion.h2 className="text-[17px] md:text-[25px] font-bold  pt-[.3rem] text-center text-blue-500">
          Proven Ad Campaigns Ready To Go!
        </motion.h2>
        <p className="text-[16px] md:text-[20px] text-slate-200 font-bold mb-7 pt-[1rem] pl-[5rem] ">
          You only have to select which Facebook ad campaigns you want to run.
        </p>
        <ul className="p-2">
          <li>
            <div className="flex flex-row  text-[15px] md:text-[20px]     text-blue-500">
              <div className="bg-green-500 text-white rounded-full  mb-2 inline-block text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <span className=" px-3 mt-[-.4rem] text-slate-300 pt-2">
                general plumbing services
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-row  text-[15px] md:text-[20px]     text-blue-500">
              <div className="bg-green-500 text-white rounded-full  mb-2 inline-block text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <span className=" px-3 mt-[-.4rem] text-slate-300 pt-2">
                water heater repairs
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-row  text-[15px] md:text-[20px]     text-blue-500">
              <div className="bg-green-500 text-white rounded-full  mb-2 inline-block text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <span className=" px-3 mt-[-.4rem] text-slate-300 pt-2">
                hydro-jet drain cleaning
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-row  text-[15px] md:text-[20px]     text-blue-500">
              <div className="bg-green-500 text-white rounded-full  mb-2 inline-block text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <span className=" px-3 mt-[-.4rem] text-slate-300 pt-2">
                repipes
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-row  text-[15px] md:text-[20px]     text-blue-500">
              <div className="bg-green-500 text-white rounded-full  mb-2 inline-block text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <span className=" px-3 mt-[-.4rem] text-slate-300 pt-2">
                water filtration systems
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-row  text-[15px] md:text-[20px]     text-blue-500">
              <div className="bg-green-500 text-white rounded-full  mb-2 inline-block text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <span className=" px-3 mt-[-.4rem] text-slate-300 pt-2">
                general plumbing services
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-row  text-[15px] md:text-[20px]     text-blue-500">
              <div className="bg-green-500 text-white rounded-full  mb-2 inline-block text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <span className=" px-3 mt-[-.4rem] text-slate-300 pt-2">
                emergency plumbing
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-row  text-[15px] md:text-[20px]     text-blue-500">
              <div className="bg-green-500 text-white rounded-full  mb-2 inline-block text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <span className=" px-3 mt-[-.4rem] text-slate-300 pt-2">
                leak detection
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-row  text-[15px] md:text-[20px]     text-blue-500">
              <div className="bg-green-500 text-white rounded-full  mb-2 inline-block text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <span className=" px-3 mt-[-.4rem] text-slate-300 pt-2">
                and more
              </span>
            </div>
          </li>
        </ul>

        <button className="bg-slate-800 mt-[2rem] mx-auto no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-4 px-8 ring-1 ring-white/10 ">
            <span className="text-[16px] mx-auto text-center">
              I WANT MORE PLUMBING LEADS
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
      </motion.div>
    </motion.div>
  );
}
