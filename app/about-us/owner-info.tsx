
"use client"

import { motion } from "framer-motion";
import Image from "next/image";


export default function OwnerInfor() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 dark:bg-white bg-black  dark:bg-dot-black/[0.2] bg-dot-white/[0.2] px-[2rem]">

            <div className="my-[4rem]">
                <h3 className="font-Poppins text-2xl md:text-3xl pt-[1rem] leading-9 text-white">
                    Tommy The Owner of Neptune Plumbing
                </h3>
                <p className="text-slate-300 mt-[1rem]  md:text-[17px] px-[.5rem] pb-[2rem]  leading-9">

                    My name is Tommmy and I&apos;ve been providing plumbing services for almost 9 years, and in those years I&apos;ve seen it all. From minor leaks to major mishaps in both residential and commercial properties, I can fix all your plumbing problems and more!


                    <br />
                    <br />
                    Neptune Plumbing and Leak Detection is a full-service professional plumbing service. I&apos;ve created longstanding, trusting relationships with clients throughout South Africa.

                    🛠️💧
                </p>
            </div>
            <motion.div
                className="container mx-auto  md:h-[200px] h-[80vh] w-full md:w-1/2 mt-8 md:mt-[2rem] rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Image
                    src="/img/neptune-owner.jpg" // the image file should be in the public folder
                    alt="southflow marketing agency no contract no set up fee"
                    width={300} // the original image width
                    height={400} // the original image height
                    layout="responsive" // this will make the image responsive
                    quality={95}
                    className="rounded-md " // this will reduce the image size and improve performance
                />
            </motion.div>

        </div>
    );
}
