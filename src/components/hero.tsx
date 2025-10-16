"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { easeInOutCubic } from "@/lib/animation";

export function HeroNew() {
  const { scrollY } = useScroll({
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollY, [0, 300], [100, 0]);
  const y2 = useTransform(scrollY, [0, 300], [50, 0]);
  const y3 = useTransform(scrollY, [0, 300], [0, 0]);
  const y4 = useTransform(scrollY, [0, 300], [50, 0]);
  const y5 = useTransform(scrollY, [0, 300], [100, 0]);

  return (
    <>
      {/* Top banner section */}
      <div className="w-full bg-gray-900 hover:bg-gray-950 text-white text-center py-5 text-base font-light flex items-center justify-center">
        <Link
          href="https://dev.to/fudailzafar/building-a-portfolio-while-you-chat-my-tambohack-project-14m3"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
        >
          Hey! Read the supporting Blog here! <ArrowRight size={20} />
        </Link>
      </div>
      {/* Main hero section */}
      <section id="hero" className="min-h-screen w-full overflow-hidden">
        <main className="mx-auto pt-14 sm:pt-24 md:pt-32 text-center relative px-4">
          <div className="relative">
            <motion.div
              initial={{ scale: 4.5, height: "80vh" }}
              animate={{ scale: 1, height: "10vh" }}
              transition={{
                scale: { delay: 0, duration: 1.8, ease: easeInOutCubic },
                height: { delay: 0, duration: 1.8, ease: easeInOutCubic },
              }}
              className="mb-16 relative z-20"
              style={{ transformOrigin: "top" }}
            >
              <div className="mt-3 sm:-mt-[72px] md:-mt-24 bg-black text-white text-xl font-bold p-0 h-20 w-20 flex items-center justify-center rounded-3xl mx-auto shadow-md">
                <Image
                  src={"/logo.png"}
                  alt=""
                  width={1}
                  height={1}
                  className="w-auto h-[40px] rounded-xl"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute inset-0 top-20 z-10 font-semibold text-2xl mt-3"
            >
              ChatPortfolio
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto mt-24">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: easeInOutCubic }}
              className="text-4xl sm:text-6xl font-bold mb-4 tracking-tighter"
            >
              <div className="flex flex-col gap-y-2 sm:gap-y-4">
                <div>A Personal Portfolio.</div>
                <div>But Rich and Beautiful.</div>
              </div>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: easeInOutCubic }}
              className="text-design-gray max-w-2xl mx-auto text-xl sm:text-[22px] mb-8 font-light text-balance mt-7 tracking-tight"
            >
              Your personal page to show your work, skills, and story.
            </motion.p>
          </div>

          <div className="mt-16">
            <Link href="/interactables">
              <Button
                variant="default"
                className="text-lg rounded-xl font-semibold py-8 px-20 sm:py-8 sm:px-14 bg-black hover:bg-black/65 cursor-pointer mb-2"
              >
                Create Your Portfolio
              </Button>
            </Link>
          </div>
        </main>
      </section>
    </>
  );
}
